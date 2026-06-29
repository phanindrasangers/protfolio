import { useState, useEffect } from 'react';

function normalizeItems(items) {
  return items.map((item) => {
    const thumbMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
    const thumbnail = item.thumbnail || (thumbMatch ? thumbMatch[1] : null);
    const wordCount = item.content?.replace(/<[^>]+>/g, '').split(/\s+/).length || 0;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    const description = item.description
      ? item.description.replace(/<[^>]+>/g, '').substring(0, 160) + '...'
      : '';
    return {
      id: item.guid,
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail,
      tags: item.categories || [],
      description,
      readTime,
      author: item.author,
    };
  });
}

async function fetchViaRss2Json(username) {
  const rssUrl = `https://medium.com/feed/@${username}`;
  const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=20`;
  const r = await fetch(api, { signal: AbortSignal.timeout(8000) });
  const data = await r.json();
  if (data.status !== 'ok') throw new Error('rss2json: ' + data.message);
  return normalizeItems(data.items);
}

async function fetchViaAllOrigins(username) {
  const rssUrl = `https://medium.com/feed/@${username}`;
  const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
  const r = await fetch(proxy, { signal: AbortSignal.timeout(12000) });
  const text = await r.text();
  const xml = new DOMParser().parseFromString(text, 'text/xml');
  const nodes = Array.from(xml.querySelectorAll('item'));
  if (nodes.length === 0) throw new Error('allorigins: no items');

  return nodes.map((node) => {
    const get = (tag) => node.querySelector(tag)?.textContent?.trim() || '';
    const content = get('encoded') || get('description');
    const thumbMatch = content.match(/<img[^>]+src="([^">]+)"/);
    const wordCount = content.replace(/<[^>]+>/g, '').split(/\s+/).length || 0;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    const rawDesc = get('description').replace(/<[^>]+>/g, '');
    return {
      id: get('guid') || get('link'),
      title: get('title'),
      link: get('link'),
      pubDate: get('pubDate'),
      thumbnail: thumbMatch ? thumbMatch[1] : null,
      tags: Array.from(node.querySelectorAll('category')).map((c) => c.textContent.trim()),
      description: rawDesc.substring(0, 160) + (rawDesc.length > 160 ? '...' : ''),
      readTime,
      author: get('creator') || get('author') || 'Phanindra Sangers',
    };
  });
}

export function useMediumFeed(username) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        let items;
        try {
          items = await fetchViaRss2Json(username);
        } catch {
          // rss2json down or rate-limited — fall back to allorigins.win
          items = await fetchViaAllOrigins(username);
        }
        if (!cancelled) {
          setPosts(items);
          setError(null);
        }
      } catch {
        if (!cancelled) setError('Could not load feed');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [username]);

  return { posts, loading, error };
}

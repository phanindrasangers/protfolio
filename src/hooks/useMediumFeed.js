import { useState, useEffect } from 'react';

export function useMediumFeed(username) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const RSS_URL = `https://medium.com/feed/@${username}`;
    // Use rss2json public API to bypass CORS
    const API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=9`;

    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'ok') {
          const items = data.items.map((item) => {
            // Extract thumbnail from content
            const thumbMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = item.thumbnail || (thumbMatch ? thumbMatch[1] : null);

            // Extract reading time estimate
            const wordCount = item.content?.replace(/<[^>]+>/g, '').split(/\s+/).length || 0;
            const readTime = Math.max(1, Math.ceil(wordCount / 200));

            // Strip HTML from description
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
          setPosts(items);
        } else {
          setError('Could not load feed');
        }
      })
      .catch(() => setError('Network error'))
      .finally(() => setLoading(false));
  }, [username]);

  return { posts, loading, error };
}

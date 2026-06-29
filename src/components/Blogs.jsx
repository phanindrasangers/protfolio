import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediumFeed } from '../hooks/useMediumFeed';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

const placeholderColors = [
  'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
  'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
  'linear-gradient(135deg, #10b981 0%, #7c3aed 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  'linear-gradient(135deg, #ef4444 0%, #7c3aed 100%)',
  'linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)',
];

function BlogCard({ post, index }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const bgGrad = placeholderColors[index % placeholderColors.length];

  return (
    <motion.a
      ref={ref}
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      style={{
        display: 'block',
        background: '#16161f',
        border: '1px solid rgba(124,58,237,0.15)',
        borderRadius: '16px',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)';
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(124,58,237,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(124,58,237,0.15)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: '180px',
          overflow: 'hidden',
          position: 'relative',
          background: bgGrad,
        }}
      >
        {post.thumbnail ? (
          <img
            src={post.thumbnail}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              opacity: 0.4,
            }}
          >
            ✍️
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(22,22,31,0.8) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem' }}>
        {/* Tags */}
        {post.tags.length > 0 && (
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.65rem',
                  padding: '0.15rem 0.5rem',
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  borderRadius: '4px',
                  color: '#7c3aed',
                  fontWeight: 500,
                  textTransform: 'lowercase',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <h3
          style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: '#f1f5f9',
            lineHeight: 1.4,
            marginBottom: '0.6rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </h3>

        <p
          style={{
            fontSize: '0.8rem',
            color: '#64748b',
            lineHeight: 1.6,
            marginBottom: '1rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.description}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#475569',
          }}
        >
          <span>{formatDate(post.pubDate)}</span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              color: '#06b6d4',
              fontWeight: 500,
            }}
          >
            {post.readTime} min read →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function BlogSkeleton() {
  return (
    <div
      style={{
        background: '#16161f',
        border: '1px solid rgba(124,58,237,0.1)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '180px',
          background: 'linear-gradient(90deg, #1e1e2a 25%, #252533 50%, #1e1e2a 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
        }}
      />
      <div style={{ padding: '1.25rem' }}>
        {[80, 60, 40].map((w, i) => (
          <div
            key={i}
            style={{
              height: '12px',
              width: `${w}%`,
              background: 'linear-gradient(90deg, #1e1e2a 25%, #252533 50%, #1e1e2a 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              borderRadius: '4px',
              marginBottom: '0.75rem',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Blogs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { posts, loading, error } = useMediumFeed('phanindra.sangers');
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? posts : posts.slice(0, 6);

  return (
    <section id="blogs" style={{ position: 'relative' }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: '#10b981',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            — Technical Writing —
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginTop: '0.5rem',
              background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Latest from Medium
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem' }}>
            Deep dives into Kubernetes, cloud-native architecture, and DevOps best practices.
          </p>
        </motion.div>

        {error ? (
          <div style={{ textAlign: 'center', color: '#ef4444', padding: '3rem' }}>
            <p>Could not load blog posts. Visit Medium directly:</p>
            <a
              href="https://medium.com/@phanindra.sangers"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#7c3aed', marginTop: '0.5rem', display: 'inline-block' }}
            >
              medium.com/@phanindra.sangers
            </a>
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {loading
                ? Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
                : displayed.map((post, i) => <BlogCard key={post.id} post={post} index={i} />)}
            </div>

            {!loading && posts.length > 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ textAlign: 'center', marginTop: '3rem' }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowAll(!showAll)}
                  style={{
                    padding: '0.85rem 2rem',
                    background: 'transparent',
                    border: '1px solid rgba(124,58,237,0.4)',
                    borderRadius: '8px',
                    color: '#7c3aed',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    marginRight: '1rem',
                  }}
                >
                  {showAll ? 'Show Less' : `Show All ${posts.length} Posts`}
                </motion.button>
                <motion.a
                  href="https://medium.com/@phanindra.sangers"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'inline-block',
                    padding: '0.85rem 2rem',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                >
                  Follow on Medium →
                </motion.a>
              </motion.div>
            )}

            {!loading && posts.length <= 6 && posts.length > 0 && (
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a
                  href="https://medium.com/@phanindra.sangers"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.85rem 2rem',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                >
                  Follow on Medium →
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

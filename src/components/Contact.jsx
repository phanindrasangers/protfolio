import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/phanindra-sangers-0225a516a/',
    description: 'Professional network & career',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0077b5',
    grad: 'linear-gradient(135deg, rgba(0,119,181,0.15), rgba(0,119,181,0.05))',
    border: 'rgba(0,119,181,0.3)',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@phanindra.sangers',
    description: 'Technical articles & tutorials',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    color: '#00ab6c',
    grad: 'linear-gradient(135deg, rgba(0,171,108,0.15), rgba(0,171,108,0.05))',
    border: 'rgba(0,171,108,0.3)',
  },
  {
    label: 'Credly',
    href: 'https://www.credly.com/users/phanindra-sangers/badges',
    description: 'Verified certifications & badges',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16A8 8 0 0112 4zm0 2a6 6 0 100 12A6 6 0 0012 6zm0 2a4 4 0 110 8 4 4 0 010-8z" />
      </svg>
    ),
    color: '#f89820',
    grad: 'linear-gradient(135deg, rgba(248,152,32,0.15), rgba(248,152,32,0.05))',
    border: 'rgba(248,152,32,0.3)',
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d14 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
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
              color: '#f59e0b',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            — Get in Touch —
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
            Let's Connect
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem', maxWidth: '480px', margin: '1rem auto 0' }}>
            Open to collaborations, speaking engagements, and conversations about cloud-native tech.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.75rem',
                background: l.grad,
                border: `1px solid ${l.border}`,
                borderRadius: '16px',
                textDecoration: 'none',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 30px ${l.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: `${l.color}20`,
                  border: `1px solid ${l.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: l.color,
                  flexShrink: 0,
                }}
              >
                {l.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '0.3rem' }}>
                  {l.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>{l.description}</div>
              </div>
              <div style={{ marginLeft: 'auto', color: '#475569', fontSize: '1.2rem' }}>→</div>
            </motion.a>
          ))}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '2.5rem',
            background: 'rgba(124,58,237,0.08)',
            border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '20px',
            maxWidth: '600px',
            margin: '4rem auto 0',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📬</div>
          <h3 style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>
            Prefer Email?
          </h3>
          <p style={{ color: '#64748b', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
            Reach out directly and I'll get back to you within 24 hours.
          </p>
          <motion.a
            href="mailto:phanindra.sangers@improving.com"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(124,58,237,0.4)' }}
            style={{
              display: 'inline-block',
              padding: '0.8rem 2rem',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              borderRadius: '8px',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}
          >
            phanindra.sangers@improving.com
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: '#334155',
            fontSize: '0.8rem',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <span>
            Built with React + Framer Motion · {new Date().getFullYear()} · Phanindra Sangers
          </span>
        </motion.div>
      </div>
    </section>
  );
}

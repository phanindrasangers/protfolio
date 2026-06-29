import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const floatVariants = {
  float: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/phanindra-sangers-0225a516a/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0077b5',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@phanindra.sangers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    color: '#00ab6c',
  },
  {
    label: 'Credly',
    href: 'https://www.credly.com/users/phanindra-sangers/badges',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16A8 8 0 0112 4zm0 2a6 6 0 100 12A6 6 0 0012 6zm0 2a4 4 0 110 8 4 4 0 010-8z" />
      </svg>
    ),
    color: '#f89820',
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          bottom: '100px',
          left: '-50px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container"
        style={{ position: 'relative', zIndex: 1, width: '100%' }}
      >
        <div className="hero-grid">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-block',
                background: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: '20px',
                padding: '0.3rem 1rem',
                fontSize: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#7c3aed',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em',
              }}
            >
              ⚡ Cloud Native Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Phanindra
              </span>
              <br />Sangers
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '1.3rem',
                color: '#94a3b8',
                marginBottom: '1.5rem',
                fontFamily: "'JetBrains Mono', monospace",
                minHeight: '2em',
              }}
            >
              <TypeAnimation
                sequence={[
                  'Kubestronaut 🚀',
                  2000,
                  'Cloud Native Engineer ☁️',
                  2000,
                  'Kubernetes Expert ⚙️',
                  2000,
                  'Tech Writer ✍️',
                  2000,
                  'DevOps Practitioner 🔧',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                color: '#64748b',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                maxWidth: '500px',
              }}
            >
              Passionate cloud-native engineer and Kubestronaut certified expert. I build scalable
              Kubernetes solutions, contribute to open-source, and write technical content to help
              the community grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-cta-row"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
            >
              <Link to="blogs" smooth duration={600} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.85rem 2rem',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}
                >
                  Read My Blogs
                </motion.button>
              </Link>
              <Link to="contact" smooth duration={600} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: '#7c3aed' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.85rem 2rem',
                    background: 'transparent',
                    border: '1px solid rgba(124,58,237,0.4)',
                    borderRadius: '8px',
                    color: '#94a3b8',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-social-row"
              style={{ display: 'flex', gap: '1rem' }}
            >
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, color: s.color }}
                  style={{
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#64748b',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar card */}
          <motion.div
            variants={floatVariants}
            animate="float"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="hero-avatar">
              {/* Glowing ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #10b981, #7c3aed)',
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                }}
              />
              {/* Avatar */}
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1e1e2a, #16161f)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '7rem',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                >
                  👨‍💻
                </motion.div>
              </div>

              {/* Kubestronaut badge floating */}
              <motion.div
                className="hero-float-badge"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                whileHover={{ scale: 1.1 }}
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '-20px',
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  borderRadius: '12px',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(124,58,237,0.5)',
                  whiteSpace: 'nowrap',
                }}
              >
                🚀 Kubestronaut
              </motion.div>

              <motion.div
                className="hero-float-badge"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0, type: 'spring' }}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '-30px',
                  background: 'rgba(16,185,129,0.2)',
                  border: '1px solid rgba(16,185,129,0.4)',
                  borderRadius: '10px',
                  padding: '0.4rem 0.6rem',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: '#10b981',
                  whiteSpace: 'nowrap',
                }}
              >
                ☁️ Cloud Native
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '-4rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#475569',
            fontSize: '0.75rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}

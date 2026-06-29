import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Blogs', to: 'blogs' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(10,10,15,0.9)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize: '1.2rem',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          cursor: 'pointer',
        }}
      >
        PS.
      </motion.div>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth
            duration={600}
            offset={-80}
            style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#7c3aed')}
            onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle — hidden for now, desktop only */}
    </motion.nav>
  );
}

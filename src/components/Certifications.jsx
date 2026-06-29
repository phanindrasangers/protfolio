import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certs = [
  {
    name: 'Certified Kubernetes Administrator',
    abbr: 'CKA',
    issuer: 'CNCF / Linux Foundation',
    color: '#326ce5',
    icon: '⎈',
    desc: 'Core Kubernetes cluster administration, networking, storage, and troubleshooting.',
  },
  {
    name: 'Certified Kubernetes Application Developer',
    abbr: 'CKAD',
    issuer: 'CNCF / Linux Foundation',
    color: '#06b6d4',
    icon: '🐳',
    desc: 'Designing and deploying cloud-native applications on Kubernetes.',
  },
  {
    name: 'Certified Kubernetes Security Specialist',
    abbr: 'CKS',
    issuer: 'CNCF / Linux Foundation',
    color: '#ef4444',
    icon: '🔒',
    desc: 'Securing Kubernetes clusters, workloads, and supply chains.',
  },
  {
    name: 'Kubernetes and Cloud Native Associate',
    abbr: 'KCNA',
    issuer: 'CNCF / Linux Foundation',
    color: '#10b981',
    icon: '☁️',
    desc: 'Cloud-native concepts, ecosystem tools, and Kubernetes fundamentals.',
  },
  {
    name: 'Kubernetes and Cloud Native Security Associate',
    abbr: 'KCSA',
    issuer: 'CNCF / Linux Foundation',
    color: '#f59e0b',
    icon: '🛡️',
    desc: 'Cloud-native security concepts, compliance, and threat modeling.',
  },
];

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      style={{
        background: '#16161f',
        border: `1px solid ${cert.color}30`,
        borderRadius: '16px',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${cert.color}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '120px',
          background: `radial-gradient(circle, ${cert.color}15 0%, transparent 70%)`,
          borderRadius: '50%',
          transform: 'translate(30%, -30%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: `${cert.color}20`,
            border: `1px solid ${cert.color}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}
        >
          {cert.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: 'inline-block',
              background: `${cert.color}20`,
              border: `1px solid ${cert.color}40`,
              borderRadius: '6px',
              padding: '0.15rem 0.5rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: cert.color,
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: '0.5rem',
              letterSpacing: '0.05em',
            }}
          >
            {cert.abbr}
          </div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.25rem', lineHeight: 1.3 }}>
            {cert.name}
          </h3>
          <p style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '0.75rem' }}>
            {cert.issuer}
          </p>
          <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{cert.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="certifications"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)',
        position: 'relative',
      }}
    >
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
              color: '#06b6d4',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            — Certifications —
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
            Kubestronaut Certified
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0' }}>
            Holder of all 5 CNCF Kubernetes certifications — a designation earned by fewer than 1% of Kubernetes practitioners worldwide.
          </p>
        </motion.div>

        {/* Kubestronaut banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            marginBottom: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(124,58,237,0.05), rgba(6,182,212,0.05), rgba(16,185,129,0.05), rgba(124,58,237,0.05))',
              animation: 'spin 20s linear infinite',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚀</div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
              }}
            >
              Kubestronaut
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              CNCF's highest Kubernetes recognition — all 5 certifications achieved
            </p>
            <motion.a
              href="https://www.credly.com/users/phanindra-sangers/badges"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(124,58,237,0.4)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-block',
                padding: '0.7rem 1.8rem',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              View All Badges on Credly →
            </motion.a>
          </div>
        </motion.div>

        {/* Cert cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {certs.map((c, i) => (
            <CertCard key={c.abbr} cert={c} index={i} />
          ))}
        </div>

        {/* Credly embed CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <p style={{ color: '#475569', fontSize: '0.85rem', marginBottom: '1rem' }}>
            View the full verified badge collection:
          </p>
          <motion.a
            href="https://www.credly.com/users/phanindra-sangers/badges"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.4rem',
              background: 'rgba(248,152,32,0.1)',
              border: '1px solid rgba(248,152,32,0.3)',
              borderRadius: '8px',
              color: '#f89820',
              fontWeight: 600,
              fontSize: '0.85rem',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16A8 8 0 0112 4zm0 2a6 6 0 100 12A6 6 0 0012 6zm0 2a4 4 0 110 8 4 4 0 010-8z" />
            </svg>
            credly.com/phanindra-sangers
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

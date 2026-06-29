import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Kubernetes', level: 95, color: '#326ce5' },
  { name: 'Docker / Containers', level: 92, color: '#2496ed' },
  { name: 'AWS / Azure / GCP', level: 85, color: '#ff9900' },
  { name: 'CI/CD & GitOps', level: 90, color: '#10b981' },
  { name: 'Helm & Kustomize', level: 88, color: '#0f1689' },
  { name: 'Terraform / IaC', level: 82, color: '#7b42bc' },
  { name: 'Prometheus & Grafana', level: 80, color: '#e6522c' },
  { name: 'Go / Python', level: 75, color: '#06b6d4' },
];

const highlights = [
  { icon: '🚀', title: 'Kubestronaut', desc: 'All 5 CNCF Kubernetes certifications' },
  { icon: '✍️', title: 'Tech Writer', desc: 'Sharing knowledge on Medium' },
  { icon: '☁️', title: 'Cloud Expert', desc: 'Multi-cloud architecture & design' },
  { icon: '🌐', title: 'Open Source', desc: 'Active CNCF community contributor' },
];

function SkillBar({ name, level, color, index }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.8rem', color: color, fontWeight: 600 }}>{level}%</span>
      </div>
      <div
        style={{
          height: '6px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
          style={{ height: '100%', background: color, borderRadius: '3px' }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" style={{ position: 'relative' }}>
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
              color: '#7c3aed',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            — About Me —
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
            Crafting Cloud Native Solutions
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              I'm a cloud-native engineer and one of the select professionals who have earned
              the{' '}
              <span style={{ color: '#7c3aed', fontWeight: 600 }}>Kubestronaut</span> designation
              from CNCF — holding all five Kubernetes certifications: CKA, CKAD, CKS, KCNA, and KCSA.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '2rem' }}>
              My work spans designing resilient Kubernetes platforms, building GitOps pipelines,
              and enabling teams to ship faster with cloud-native tooling. I'm passionate about
              the CNCF ecosystem and regularly write technical articles on Medium to help engineers
              navigate the cloud-native landscape.
            </p>

            {/* Highlight cards */}
            <div className="highlight-grid">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(124,58,237,0.5)' }}
                  style={{
                    background: '#16161f',
                    border: '1px solid rgba(124,58,237,0.15)',
                    borderRadius: '12px',
                    padding: '1rem',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{h.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9', marginBottom: '0.25rem' }}>
                    {h.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{ fontWeight: 700, marginBottom: '1.5rem', color: '#f1f5f9' }}>
              Technical Skills
            </h3>
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

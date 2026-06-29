import './index.css';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ParticleBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
    </div>
  );
}

export default App;

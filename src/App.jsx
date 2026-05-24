import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundFX from './components/BackgroundFX';
import AnimatedSection from './components/AnimatedSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <BackgroundFX />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={80}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <Education />
        </AnimatedSection>
        <AnimatedSection delay={160}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}

import { useState } from 'react';
import { profile, stats } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import HireMeModal from './HireMeModal';
import ProfileOrbit from './ProfileOrbit';
import './Hero.css';

export default function Hero() {
  const typedRole = useTypewriter(profile.roles);
  const [hireOpen, setHireOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="home" className="hero">
        <div className="hero__bg-glow hero__bg-glow--1" aria-hidden="true" />
        <div className="hero__bg-glow hero__bg-glow--2" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__visual hero__animate hero__animate--left">
            <ProfileOrbit />
          </div>

          <div className="hero__content">
            <p className="hero__greeting hero__animate hero__animate--d1">Hello, I&apos;m</p>
            <h1 className="hero__name hero__animate hero__animate--d2">
              <span className="hero__name-line">Kieth Disney</span>
              <span className="hero__name-line hero__name-line--accent">Tumulak Oyao</span>
            </h1>
            <h2 className="hero__role hero__animate hero__animate--d3">
              And I&apos;m a <span className="text-accent">{typedRole}</span>
              <span className="hero__cursor">|</span>
            </h2>
            <p className="hero__bio hero__animate hero__animate--d4">{profile.heroIntro}</p>

            <div className="hero__cta hero__animate hero__animate--d5">
              <button type="button" className="btn btn--primary" onClick={() => setHireOpen(true)}>
                Hire Me
              </button>
              <button type="button" className="btn btn--outline" onClick={() => scrollTo('about')}>
                About Me
              </button>
            </div>
          </div>
        </div>

        <div className="hero__stats container hero__animate hero__animate--d6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="hero__stat">
              {i > 0 && <span className="hero__stat-divider" aria-hidden="true" />}
              <div className="hero__stat-inner">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <HireMeModal isOpen={hireOpen} onClose={() => setHireOpen(false)} />
    </>
  );
}

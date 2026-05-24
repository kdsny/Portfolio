import { education } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section__title">
          <span className="text-accent">Education</span> Background
        </h2>
        <p className="section__subtitle">My academic journey</p>

        <div className="education__timeline">
          {education.map((item, index) => (
            <article key={item.level} className="education__item">
              <div className="education__dot" aria-hidden="true" />
              <div className="education__card">
                <span className="education__step">0{index + 1}</span>
                <h3>{item.level}</h3>
                <p className="education__school">{item.school}</p>
                <time>{item.year}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

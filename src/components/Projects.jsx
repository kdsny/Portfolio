import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section__title">
            Academic <span className="text-accent">Projects</span>
          </h2>
          <p className="section__subtitle">Work I built during my Computer Science journey</p>

          <div className="projects__grid">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className="projects__card"
                onClick={() => setActiveProject(project)}
              >
                <span className="projects__tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <span className="projects__cta">
                  View details <HiArrowRight aria-hidden />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

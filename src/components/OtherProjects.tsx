import { useEffect, useRef } from 'react';
import { OTHER_PROJECTS, type OtherProject } from '../config/portfolio.config';

function ProjectRow({ project, index }: { project: OtherProject; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const isMuted = project.statusVariant === 'muted';

  return (
    <div
      className={`proj-row${isMuted ? ' muted' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="proj-top">
        <div className="proj-title-group">
          <span className="proj-num mono">{String(index + 1).padStart(2, '0')}</span>
          <h3>{project.title}</h3>
        </div>
        {project.links ? (
          <div className="proj-links">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        ) : (
          <span className="proj-status">Not started</span>
        )}
      </div>
      <p className="proj-sub eyebrow mono">{project.eyebrow}</p>
      {project.status && (
        <span className="status-pill mono">{project.status}</span>
      )}
      <p className="proj-desc">{project.description}</p>
      <div className="stack-row">
        {project.stack.map((tech) => (
          <span key={tech} className="chip mono">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function OtherProjects() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section>
      <div className="wrap">
        <div className="section-head-line reveal" ref={headRef}>
          <h2>Other Projects</h2>
          <span className="section-num mono">02</span>
        </div>
        <div>
          {OTHER_PROJECTS.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

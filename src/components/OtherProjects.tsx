import { useEffect, useRef } from 'react';
import { OTHER_PROJECTS, type OtherProject } from '../config/portfolio.config';

function ProjectCard({ project, index }: { project: OtherProject; index: number }) {
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const isMuted = project.statusVariant === 'muted';
  const hasScreenshots = Boolean(project.screenshots?.desktop);
  const hasMobile = Boolean(project.screenshots?.mobile);
  const primaryUrl = project.links?.demo || project.links?.github;

  return (
    <div
      className={`proj-card reveal${isMuted ? ' proj-card-muted' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {hasScreenshots ? (
        <a
          href={primaryUrl}
          target="_blank"
          rel="noreferrer"
          className="card-preview"
          title={`View ${project.title}`}
          tabIndex={primaryUrl ? 0 : -1}
        >
          {hasMobile ? (
            <div className="card-mockup-duo">
              <div className="card-desktop-frame">
                <div className="card-frame-bar">
                  <div className="frame-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="card-screen">
                  <img
                    src={project.screenshots!.desktop}
                    alt={`${project.title} Desktop`}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="card-mobile-frame">
                <div className="card-phone-pill" />
                <div className="card-mobile-screen">
                  <img
                    src={project.screenshots!.mobile}
                    alt={`${project.title} Mobile`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="card-mockup-single">
              <div className="card-desktop-frame">
                <div className="card-frame-bar">
                  <div className="frame-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="card-screen">
                  <img
                    src={project.screenshots!.desktop}
                    alt={`${project.title} Desktop`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="preview-hover-tag mono">
            <span>Explore</span> &rarr;
          </div>
        </a>
      ) : isMuted ? (
        <div className="card-placeholder-banner">
          <div className="placeholder-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="status-pill mono">{project.status || 'In progress'}</span>
        </div>
      ) : null}

      <div className="proj-card-body">
        <div className="card-meta">
          <span className="proj-num mono">{String(index + 1).padStart(2, '0')}</span>
          <p className="proj-sub eyebrow mono">{project.eyebrow}</p>
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>

        <div className="stack-row">
          {project.stack.map((tech) => (
            <span key={tech} className="chip mono">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-footer">
          {project.links ? (
            <div className="proj-links">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="link-btn">
                  <span>Demo</span> &rarr;
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn link-ghost"
                >
                  <span>GitHub</span> &rarr;
                </a>
              )}
            </div>
          ) : (
            <span className="proj-status mono">Planning stage</span>
          )}
        </div>
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
        <div className="proj-grid">
          {OTHER_PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

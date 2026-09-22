import { useReveal } from '../hooks/useReveal';
import { FEATURED_PROJECT } from '../config/portfolio.config';

export default function FeaturedProject() {
  const headRef = useReveal<HTMLDivElement>();
  const infoRef = useReveal<HTMLDivElement>();
  const frameRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="bar" />
          <h2>Featured project</h2>
        </div>

        <div className="featured-grid">
          <div className="reveal" ref={infoRef}>
            <p className="eyebrow mono">{FEATURED_PROJECT.eyebrow}</p>
            <h3 className="featured-title">{FEATURED_PROJECT.title}</h3>
            <p className="featured-desc">{FEATURED_PROJECT.description}</p>

            <div className="stack-row">
              {FEATURED_PROJECT.stack.map((tech) => (
                <span key={tech} className="chip mono">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flow mono">
              {FEATURED_PROJECT.flow.map((step, i) => (
                <span key={step}>
                  {step}
                  {i < FEATURED_PROJECT.flow.length - 1 && (
                    <span className="arrow"> &rarr; </span>
                  )}
                </span>
              ))}
            </div>

            <div className="challenge">
              <strong>Key technical challenge</strong>
              {FEATURED_PROJECT.challenge}
            </div>

            <div className="btn-row">
              <a
                href={FEATURED_PROJECT.links.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
              <a
                href={FEATURED_PROJECT.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                GitHub
              </a>
            </div>
          </div>

          <div
            className="frame reveal"
            ref={frameRef}
            style={{ transitionDelay: '.1s' }}
          >
            <div className="frame-bar">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <span className="url mono">{FEATURED_PROJECT.mockupUrl}</span>
            </div>
            <div className="frame-body">
              <svg
                className="fb-stars"
                width="100%"
                height="100%"
                viewBox="0 0 400 260"
              >
                <circle cx="370" cy="24" r="1.4" fill="var(--star)" />
                <circle cx="30" cy="40" r="1.2" fill="var(--star)" />
                <circle cx="380" cy="230" r="1.6" fill="var(--star)" />
              </svg>
              <div className="fb-query mono">{FEATURED_PROJECT.mockupQuery}</div>
              {FEATURED_PROJECT.mockupCards.map((card) => (
                <div key={card.title} className="fb-card">
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                  <span className="fb-tag mono">source: {card.source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

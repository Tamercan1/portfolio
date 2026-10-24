import { useReveal } from '../hooks/useReveal';
import { FEATURED_PROJECT } from '../config/portfolio.config';

export default function FeaturedProject() {
  const headRef = useReveal<HTMLDivElement>();
  const introRef = useReveal<HTMLDivElement>();
  const showcaseRef = useReveal<HTMLAnchorElement>();
  const specsRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="featured-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head reveal" ref={headRef}>
          <span className="bar" />
          <h2>Featured project</h2>
        </div>

        {/* Top Overview: Title, Description, CTAs (left) and Tech Stack (right) */}
        <div className="featured-intro-grid reveal" ref={introRef}>
          <div className="featured-intro-main">
            <p className="eyebrow mono">{FEATURED_PROJECT.eyebrow}</p>
            <h3 className="featured-title">{FEATURED_PROJECT.title}</h3>
            <p className="featured-desc">{FEATURED_PROJECT.description}</p>
            <div className="btn-row">
              <a
                href={FEATURED_PROJECT.links.app}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Launch App
              </a>
              <a
                href={FEATURED_PROJECT.links.landing}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Landing Page
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

          <div className="featured-intro-side">
            <span className="side-label mono">Technologies & Architecture</span>
            <div className="stack-row">
              {FEATURED_PROJECT.stack.map((tech) => (
                <span key={tech} className="chip mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Centerpiece: Full-Width Interactive Mockup Showcase */}
        <a
          href={FEATURED_PROJECT.links.landing}
          target="_blank"
          rel="noreferrer"
          className="featured-showcase-card reveal"
          ref={showcaseRef}
          style={{ transitionDelay: '.1s' }}
          title="Click to explore SpaceScout live landing page"
        >
          <div className="showcase-header">
            <div className="showcase-badge mono">
              <span className="pulse-dot" />
              <span>Responsive Interface Preview</span>
            </div>
            <div className="showcase-action mono">
              <span>Explore Landing Page</span>
              <span className="arrow-icon">&rarr;</span>
            </div>
          </div>

          <div className="showcase-canvas">
            <div className="device-duo">
              {/* Desktop Mac browser mockup */}
              <div className="device-desktop">
                <div className="device-bar">
                  <div className="device-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="device-url mono">spacescout.vercel.app</span>
                </div>
                <div className="device-screen">
                  <img
                    src={FEATURED_PROJECT.screenshots.desktop}
                    alt="SpaceScout v2 Desktop Interface"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Mobile device mockup overlaid */}
              <div className="device-mobile">
                <div className="mobile-notch">
                  <span className="notch-pill" />
                </div>
                <div className="mobile-screen">
                  <img
                    src={FEATURED_PROJECT.screenshots.mobile}
                    alt="SpaceScout v2 Mobile Interface"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* Bottom Technical Deep-Dive: System Flow & Key Engineering Challenge */}
        <div
          className="featured-specs-grid reveal"
          ref={specsRef}
          style={{ transitionDelay: '.15s' }}
        >
          <div className="spec-card">
            <div className="spec-card-head">
              <span className="spec-icon mono">01</span>
              <h4>System Architecture & Execution Flow</h4>
            </div>
            <div className="flow-steps">
              {FEATURED_PROJECT.flow.map((step, i) => (
                <div key={step} className="flow-step-item">
                  <span className="step-idx mono">0{i + 1}</span>
                  <span className="step-text mono">{step}</span>
                  {i < FEATURED_PROJECT.flow.length - 1 && (
                    <span className="flow-connector" aria-hidden="true">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-card-head">
              <span className="spec-icon mono">02</span>
              <h4>Key Engineering Challenge</h4>
            </div>
            <p className="spec-challenge-desc">{FEATURED_PROJECT.challenge}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

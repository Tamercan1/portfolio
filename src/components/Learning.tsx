import { useReveal } from '../hooks/useReveal';
import { LEARNING } from '../config/portfolio.config';

export default function Learning() {
  const headRef = useReveal<HTMLDivElement>();
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="bar" />
          <h2>Currently learning</h2>
        </div>
        <p
          className="section-sub"
          style={{ marginTop: '-32px', marginBottom: '36px' }}
        >
          {LEARNING.subtitle}
        </p>
        <div className="learn-wrap" ref={wrapRef}>
          <svg
            className="learn-lines"
            viewBox="0 0 900 140"
            preserveAspectRatio="none"
          >
            <path
              pathLength={1}
              d="M40 30 L220 80 L420 20 L600 90 L780 40"
              stroke="var(--border-strong)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
          <div className="learn-grid">
            {LEARNING.items.map((item) => (
              <span key={item} className="node">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

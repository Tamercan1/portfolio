import { useReveal } from '../hooks/useReveal';
import { STACK_CATEGORIES } from '../config/portfolio.config';

export default function Stack() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="bar" />
          <h2>Technical Stack</h2>
        </div>

        <div className="stack-grid reveal" ref={gridRef}>
          {STACK_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="stack-card"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="stack-card-head">
                <span className="stack-card-num mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="stack-card-title">{cat.title}</h3>
              </div>
              <p className="stack-card-desc">{cat.description}</p>
              <div className="stack-chips">
                {cat.items.map((item) => (
                  <span key={item} className="chip mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

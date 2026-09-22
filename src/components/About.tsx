import { useReveal } from '../hooks/useReveal';
import { ABOUT } from '../config/portfolio.config';

export default function About() {
  const headRef = useReveal<HTMLDivElement>();
  const textRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLUListElement>();

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="bar" />
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <div className="reveal" ref={textRef}>
            {ABOUT.paragraphs.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
          <ul className="focus-list" ref={listRef}>
            {ABOUT.focus.map((item, i) => (
              <li key={item}>
                <span>{item}</span>
                <span className="n mono">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

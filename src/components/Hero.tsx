import { IDENTITY } from '../config/portfolio.config';
import { LINKS } from '../config/links';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <svg className="hero-deco" viewBox="0 0 520 420" fill="none">
        <circle className="star twinkle" cx="430" cy="60" r="2" fill="var(--star)" />
        <circle className="star" cx="360" cy="140" r="1.6" fill="var(--star)" />
        <circle className="star" cx="470" cy="180" r="1.6" fill="var(--star)" />
        <circle className="star twinkle" cx="330" cy="230" r="2.2" fill="var(--star)" />
        <circle className="star" cx="410" cy="290" r="1.4" fill="var(--star)" />
        <circle className="star" cx="480" cy="330" r="1.8" fill="var(--star)" />
        <circle className="star" cx="250" cy="70" r="1.4" fill="var(--star)" />
        <path
          className="line"
          pathLength={1}
          d="M430 60 L360 140 L470 180 L330 230 L410 290 L480 330"
          stroke="var(--border-strong)"
          strokeWidth="1"
        />
        <path
          className="line"
          pathLength={1}
          d="M360 140 L250 70"
          stroke="var(--border-strong)"
          strokeWidth="1"
          style={{ animationDelay: '.8s' }}
        />
      </svg>
      <div className="wrap">
        <div className="hero-content">
          <p className="hero-eyebrow mono">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              style={{ verticalAlign: '-2px', marginRight: '7px' }}
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="5"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeDasharray="2 2"
              />
              <circle cx="6.5" cy="6.5" r="1.3" fill="currentColor" />
            </svg>
            {IDENTITY.title}
          </p>
          <h1>{IDENTITY.name}</h1>
          <h2 className="role">{IDENTITY.role}</h2>
          <p className="lede">{IDENTITY.lede}</p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

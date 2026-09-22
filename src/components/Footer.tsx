import { IDENTITY } from '../config/portfolio.config';

export default function Footer() {
  return (
    <footer>
      <div
        className="wrap"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <span>
          {IDENTITY.name} &mdash; {IDENTITY.footerTagline}
        </span>
        <span className="mono">&copy; {IDENTITY.year}</span>
      </div>
    </footer>
  );
}

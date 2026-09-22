import { useEffect, useState } from 'react';
import { IDENTITY, NAV_ITEMS } from '../config/portfolio.config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`site-nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}
      id="siteNav"
    >
      <div className="nav-inner">
        <a href="#home" className="nav-mark">
          <span className="dot" />
          {IDENTITY.fullName}
        </a>
        <nav className="nav-links" id="navLinks">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 4H14M2 8H14M2 12H14"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

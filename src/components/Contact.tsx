import { useReveal } from '../hooks/useReveal';
import { CONTACT } from '../config/portfolio.config';

export default function Contact() {
  const innerRef = useReveal<HTMLDivElement>();

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-block reveal" ref={innerRef}>
          <h2 className="contact-heading">{CONTACT.heading}</h2>
          <p className="contact-subtitle">{CONTACT.subtitle}</p>
          <div className="btn-row">
            {CONTACT.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className={`btn btn-${link.variant}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

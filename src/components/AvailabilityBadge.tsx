import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AVAILABILITY } from '../config/portfolio.config';

export default function AvailabilityBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close on Escape key & prevent body scrolling when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(AVAILABILITY.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const mailtoUrl = `mailto:${AVAILABILITY.email}?subject=${encodeURIComponent(
    AVAILABILITY.modal.emailSubject
  )}&body=${encodeURIComponent(AVAILABILITY.modal.emailBody)}`;

  return (
    <>
      <button
        type="button"
        className="availability-badge"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <div className="avail-left">
          <span className="avail-dot-wrapper">
            <span className="avail-dot-ping" />
            <span className="avail-dot-core" />
          </span>
          <span className="avail-status">{AVAILABILITY.status}</span>
        </div>
        <div className="avail-right">
          <span className="avail-action">{AVAILABILITY.badgeAction}</span>
          <svg
            className="avail-arrow"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9L9 3M9 3H4.5M9 3V7.5" />
          </svg>
        </div>
      </button>

      {isOpen &&
        createPortal(
          <div
            className="modal-backdrop"
            onClick={() => setIsOpen(false)}
            role="presentation"
          >
            <div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-connect-title"
            >
              <div className="modal-header">
                <div className="modal-status-pill">
                  <span className="avail-dot-wrapper" style={{ width: 8, height: 8 }}>
                    <span className="avail-dot-core" style={{ width: 6, height: 6 }} />
                  </span>
                  <span>Currently Available</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close modal"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  >
                    <path d="M3 3L11 11M11 3L3 11" />
                  </svg>
                </button>
              </div>

              <h3 id="modal-connect-title" className="modal-title">
                {AVAILABILITY.modal.heading}
              </h3>
              <p className="modal-subtitle">{AVAILABILITY.modal.subheading}</p>

              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <div className="modal-meta-label">Timezone</div>
                  <div className="modal-meta-val">{AVAILABILITY.timezone}</div>
                </div>
                <div className="modal-meta-item">
                  <div className="modal-meta-label">Response Time</div>
                  <div className="modal-meta-val">{AVAILABILITY.responseTime}</div>
                </div>
              </div>

              <div className="modal-preview-box">
                <div className="modal-preview-label">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Pre-filled Draft:</span>
                </div>
                <pre className="modal-preview-text">{AVAILABILITY.modal.emailBody}</pre>
              </div>

              <div className="modal-actions">
                <a
                  href={mailtoUrl}
                  className="modal-primary-btn"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Send an Email</span>
                </a>

                <button
                  type="button"
                  className={`modal-secondary-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Copied {AVAILABILITY.email}!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copy: {AVAILABILITY.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

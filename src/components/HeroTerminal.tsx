import { useState } from 'react';

type Tab = 'code' | 'terminal';

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<Tab>('code');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Active engineering telemetry
export const engineer = {
  name: "Tamercan Wawa",
  role: "Software Engineering & AI",
  location: "Philippines (PHT · UTC+8)",
  status: "Open for projects & roles",
  focus: [
    "Full-Stack Web Systems",
    "LLM Architecture & Tool Calling",
    "APIs & Data Pipelines"
  ],
  flagship: {
    name: "SpaceScout v2",
    stack: ["React", "Django REST", "OpenRouter"],
    status: "Shipped & live"
  }
} as const;`;

  const terminalSnippet = `$ tamercan --status
[ok] Systems operational
[ok] Primary: Software Engineering & AI
[ok] Flagship: SpaceScout v2 (LLM Planner + NASA APIs)
[ok] Timezone: PHT (UTC+8)
[ok] Status: Open for opportunities & collaboration`;

  const handleCopy = async () => {
    const textToCopy = activeTab === 'code' ? codeSnippet : terminalSnippet;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="terminal-card" aria-label="Interactive developer telemetry card">
      {/* Mac Window Header */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>

        <div className="terminal-tabs">
          <button
            type="button"
            className={`terminal-tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <span className="tab-icon-ts">TS</span>
            <span>status.ts</span>
          </button>
          <button
            type="button"
            className={`terminal-tab ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <span className="tab-icon-sh">$_</span>
            <span>telemetry.sh</span>
          </button>
        </div>

        <button
          type="button"
          className="terminal-copy-btn"
          onClick={handleCopy}
          title="Copy contents"
          aria-label="Copy contents"
        >
          {copied ? (
            <span className="copy-confirmed">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Copied</span>
            </span>
          ) : (
            <svg
              width="13"
              height="13"
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
          )}
        </button>
      </div>

      {/* Code / Terminal Body */}
      <div className="terminal-body mono">
        {activeTab === 'code' ? (
          <div className="code-view">
            <div className="line-numbers" aria-hidden="true">
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
              <span>06</span>
              <span>07</span>
              <span>08</span>
              <span>09</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
            </div>
            <pre className="code-content">
              <code>
                <span className="tok-comment">// Active engineering telemetry</span>
                {'\n'}
                <span className="tok-kw">export const</span>{' '}
                <span className="tok-var">engineer</span> = {'{'}
                {'\n  '}
                <span className="tok-key">name</span>:{' '}
                <span className="tok-str">"Tamercan Wawa"</span>,
                {'\n  '}
                <span className="tok-key">role</span>:{' '}
                <span className="tok-str">"Software Engineering & AI"</span>,
                {'\n  '}
                <span className="tok-key">location</span>:{' '}
                <span className="tok-str">"Philippines (PHT · UTC+8)"</span>,
                {'\n  '}
                <span className="tok-key">status</span>:{' '}
                <span className="tok-str">"Open for projects & roles"</span>,{' '}
                <span className="tok-comment">
                  // <span className="tok-live-dot" />available
                </span>
                {'\n  '}
                <span className="tok-key">focus</span>: [
                {'\n    '}
                <span className="tok-str">"Full-Stack Web Systems"</span>,
                {'\n    '}
                <span className="tok-str">"LLM Architecture & Tools"</span>,
                {'\n    '}
                <span className="tok-str">"APIs & Data Pipelines"</span>
                {'\n  '}],
                {'\n  '}
                <span className="tok-key">flagship</span>: {'{'}
                {'\n    '}
                <span className="tok-key">name</span>:{' '}
                <span className="tok-str">"SpaceScout v2"</span>,
                {'\n    '}
                <span className="tok-key">stack</span>: [
                <span className="tok-str">"React"</span>,{' '}
                <span className="tok-str">"Django REST"</span>,{' '}
                <span className="tok-str">"OpenRouter"</span>],
                {'\n    '}
                <span className="tok-key">status</span>:{' '}
                <span className="tok-accent">"Shipped & live"</span>
                {'\n  '}{'}'}
                {'\n'}{'}'} <span className="tok-kw">as const</span>;
              </code>
            </pre>
          </div>
        ) : (
          <div className="terminal-view">
            <div className="cli-prompt">
              <span className="cli-user">tamercan@station</span>
              <span className="cli-sep">:</span>
              <span className="cli-path">~/portfolio</span>
              <span className="cli-symbol">$</span>
              <span className="cli-cmd"> tamercan --status</span>
            </div>
            <div className="cli-output">
              <div className="cli-line">
                <span className="cli-ok">[ok]</span> Systems operational
              </div>
              <div className="cli-line">
                <span className="cli-ok">[ok]</span> Primary: Software Engineering & AI
              </div>
              <div className="cli-line">
                <span className="cli-ok">[ok]</span> Flagship: SpaceScout v2 (LLM Planner + NASA APIs)
              </div>
              <div className="cli-line">
                <span className="cli-ok">[ok]</span> Timezone: PHT (UTC+8)
              </div>
              <div className="cli-line">
                <span className="cli-ok">[ok]</span> Status: Open for opportunities & collaboration
              </div>
            </div>
            <div className="cli-prompt next-prompt">
              <span className="cli-user">tamercan@station</span>
              <span className="cli-sep">:</span>
              <span className="cli-path">~/portfolio</span>
              <span className="cli-symbol">$</span>
              <span className="cli-cursor" />
            </div>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="terminal-footer mono">
        <div className="footer-left">
          <span className="footer-item">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="3" x2="6" y2="15" />
              <circle cx="18" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M18 9a9 9 0 0 1-9 9" />
            </svg>
            main
          </span>
          <span className="footer-sep">·</span>
          <span className="footer-item">TypeScript</span>
        </div>
        <div className="footer-right">
          <span className="footer-status-dot" />
          <span>spacescout-v2: ready</span>
        </div>
      </div>
    </div>
  );
}

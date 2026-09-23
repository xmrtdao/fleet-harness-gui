import { useState } from "react";
import { ArrowUpRight, Check, ChevronRight, CircleDot, Github, Menu, Play, ShieldCheck, Sparkles, X } from "lucide-react";
import "./pages.css";

type Step = { label: string; detail: string; tone: "green" | "gold" | "muted" };

const steps: Step[] = [
  { label: "Relay host", detail: "Map the live relay and its trust boundary", tone: "green" },
  { label: "Fleet agents", detail: "Follow chat roles and agent handoffs", tone: "green" },
  { label: "Code inspection", detail: "Read source without changing it", tone: "gold" },
  { label: "Inference cascade", detail: "Trace provider fallbacks end to end", tone: "muted" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [running, setRunning] = useState(false);
  const [complete, setComplete] = useState(false);

  function replay() {
    setRunning(true);
    setComplete(false);
    window.setTimeout(() => {
      setRunning(false);
      setComplete(true);
    }, 1500);
  }

  return (
    <div className="lumen-site">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lumen home">
          <span className="brand-mark"><span /></span>
          <span>Lumen</span>
        </a>
        <button className="mobile-menu" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={menuOpen ? "site-nav open" : "site-nav"}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#signals" onClick={() => setMenuOpen(false)}>Signals</a>
          <a href="https://github.com/xmrtdao/fleet-harness-gui" target="_blank" rel="noreferrer">Source <ArrowUpRight size={14} /></a>
        </nav>
        <a className="header-cta" href="#replay">Replay sample <ChevronRight size={15} /></a>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><CircleDot size={12} /> Investigation console / v0.1</p>
            <h1>See the thinking<br /><em>behind the answer.</em></h1>
            <p className="hero-lede">Lumen turns an AI investigation into a legible trail of skills, tools, and inference decisions — so you can follow the work without opening a terminal.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#replay">Explore the replay <ArrowUpRight size={16} /></a>
              <a className="text-link" href="https://github.com/xmrtdao/fleet-harness-gui" target="_blank" rel="noreferrer"><Github size={16} /> View on GitHub</a>
            </div>
            <div className="trust-line"><ShieldCheck size={15} /> Read-only by default <span /> <span>Built for fleet operators</span></div>
          </div>
          <div className="hero-visual" aria-label="Abstract network visualization">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="node node-center"><Sparkles size={20} /></div>
            <div className="node node-a"><span>relay</span></div>
            <div className="node node-b"><span>agents</span></div>
            <div className="node node-c"><span>models</span></div>
            <div className="signal signal-a" /><div className="signal signal-b" /><div className="signal signal-c" />
            <div className="visual-caption"><span className="status-dot" /> cascade ready <strong>04</strong></div>
          </div>
        </section>

        <section className="signal-strip shell" id="signals">
          <div><span className="metric">08</span><span>skills in the sample pass</span></div>
          <div><span className="metric">04</span><span>model providers traced</span></div>
          <div><span className="metric">0</span><span>files changed during review</span></div>
        </section>

        <section className="replay-section shell" id="replay">
          <div className="section-heading">
            <div><p className="eyebrow">Sample investigation</p><h2>From question to cascade.</h2></div>
            <button className="button button-secondary" type="button" onClick={replay} disabled={running}><Play size={15} fill="currentColor" /> {running ? "Running pass…" : "Replay investigation"}</button>
          </div>
          <div className="replay-grid">
            <div className="question-card">
              <div className="card-label"><span className="avatar">Y</span> You asked</div>
              <h3>Which models and providers sit in the inference cascade?</h3>
              <p>Follow the source trail across the relay and fleet agents, then see what each rung is responsible for.</p>
              <div className="question-foot"><span className="status-dot" /> read-only pass <span>·</span> 8.4s sample</div>
            </div>
            <div className="timeline-card">
              <div className="timeline-head"><span>Investigation timeline</span><span className="live-pill">{complete ? "Complete" : running ? "Live" : "Ready"}</span></div>
              <ol className="steps">
                {steps.map((step, index) => <li key={step.label} className={running && index === 2 ? "active" : ""}><span className={`step-icon ${step.tone}`}>{complete || index < 2 ? <Check size={14} /> : <span>{index + 1}</span>}</span><span><strong>{step.label}</strong><small>{step.detail}</small></span><span className="step-time">{index === 3 ? "2.5s" : `${index + 1}.${index + 8}s`}</span></li>)}
              </ol>
              <div className="cascade-note"><span className="pulse" /><span><strong>Finding ready</strong> The relay walks a four-rung cascade, starting with a free default.</span></div>
            </div>
          </div>
        </section>

        <section className="how-section shell" id="how-it-works">
          <p className="eyebrow">Why Lumen</p><h2>Calm surfaces for<br /><em>complex systems.</em></h2>
          <div className="feature-grid"><article><span className="feature-number">01</span><h3>Make invisible work visible</h3><p>Every skill, tool lookup, handoff, and finding has a place in the timeline. No black box, no terminal required.</p></article><article><span className="feature-number">02</span><h3>Keep the pass reversible</h3><p>Investigation is read-only by default. Inspect a path, replay a sample, and leave the underlying relay untouched.</p></article><article><span className="feature-number">03</span><h3>Hand off with context</h3><p>Share the answer with the cascade, files, and rationale attached — not just a confident paragraph.</p></article></div>
        </section>
      </main>

      <footer className="site-footer shell"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>Lumen</span></a><span>Fleet investigation console</span><a href="https://github.com/xmrtdao/fleet-harness-gui" target="_blank" rel="noreferrer">Open source on GitHub <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}

export default App;

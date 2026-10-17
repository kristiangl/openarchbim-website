import type { ReactNode } from 'react'
import { useMotion } from './motion'

const heroImage =
  'https://images.unsplash.com/photo-1614595737476-42487331b8a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=1800'

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      {diagonal ? (
        <path d="M3 13 13 3m-7 0h7v7" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path
          d="M2 8h11m-4-4 4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
    </svg>
  )
}

// Line icons for the feature cards. 64x64 grid, drawn with the current text
// colour; elements with the "accent" class pick up the brand accent colour.
const capabilityIcons: Record<string, ReactNode> = {
  // Dimension line over a wall
  '01': (
    <>
      <path d="M10 10v20M54 10v20" />
      <path className="accent" d="M10 17h44M6 21l8-8M50 21l8-8" />
      <rect x="10" y="30" width="44" height="22" />
      <path d="M10 41h44" />
    </>
  ),
  // Armchair
  '02': (
    <>
      <path d="M20 26v-8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v8" />
      <rect x="10" y="26" width="8" height="18" rx="3" />
      <rect x="46" y="26" width="8" height="18" rx="3" />
      <rect className="accent" x="18" y="32" width="28" height="12" rx="2" />
      <path d="M16 44v7M48 44v7" />
    </>
  ),
  // Schedule table
  '03': (
    <>
      <rect x="8" y="12" width="48" height="40" />
      <path className="accent" d="M8 22h48" />
      <path d="M8 32h48M8 42h48M26 12v40M42 12v40" />
    </>
  ),
  // Legend with symbols
  '04': (
    <>
      <rect x="10" y="8" width="44" height="48" rx="2" />
      <rect x="16" y="16" width="8" height="8" />
      <path d="M30 20h18M30 32h18M30 44h18" />
      <circle className="accent" cx="20" cy="32" r="4" />
      <path d="M16 48h8v-8M16 48a8 8 0 0 0 8-8" />
    </>
  ),
  // Set square and pencil
  '05': (
    <>
      <path d="M12 52V12l40 40z" />
      <path className="accent" d="M20 44V30l14 14z" />
      <path d="M20 52v-4M28 52v-3M36 52v-4M44 52v-3" />
      <path d="M36 30l2-8 14-14 6 6-14 14z" />
      <path d="M38 22l6 6" />
    </>
  ),
  // File coming in
  '06': (
    <>
      <path d="M18 8h22l12 12v36H18z" />
      <path d="M40 8v12h12" />
      <path className="accent" d="M4 38h26M24 32l6 6-6 6" />
    </>
  ),
}

function CapabilityIcon({ id }: { id: string }) {
  return (
    <svg
      aria-hidden="true"
      className="capability-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
      viewBox="0 0 64 64"
    >
      {capabilityIcons[id]}
    </svg>
  )
}

const capabilities = [
  {
    number: '01',
    title: 'Parametric by default',
    text: 'Drive dimensions and relationships with parameters you can edit at any point in the project.',
  },
  {
    number: '02',
    title: 'Build custom families',
    text: 'Make your own reusable building components inside the app, with no separate tool to learn.',
  },
  {
    number: '03',
    title: 'Schedules with real logic',
    text: 'Custom properties, formulas and grouping that update live with the model.',
  },
  {
    number: '04',
    title: 'Legends that work',
    text: 'Place live components in legends and control how they are drawn, with no workarounds.',
  },
  {
    number: '05',
    title: 'Purpose-built 2D drafting',
    text: 'Proper drafting tools for details and drafting views, with the precision you expect.',
  },
  {
    number: '06',
    title: 'Bring existing projects',
    text: 'Open .rvt project files and carry on working without rebuilding your models.',
  },
]

const technicalDetails = [
  ['01', 'Built in Rust', 'Fast and memory-safe, so large projects stay responsive.'],
  ['02', 'Free and open source', 'No licence fees or subscriptions. Read the code, suggest changes, and keep your data.'],
  ['03', 'Truly native', 'A real desktop app for your OS, not a web page in a wrapper.'],
  ['04', 'Familiar layout', 'A standard BIM layout, so experienced users can start straight away.'],
  ['05', 'Local by default', 'Runs on your machine. No account, no cloud, no internet needed.'],
  ['06', 'Open standards', 'IFC support and a documented project format, so your files are never locked in.'],
]

function InterfacePreview({ sheet = false }: { sheet?: boolean }) {
  return (
    <div className={`interface-preview ${sheet ? 'sheet-preview' : ''}`} aria-hidden="true">
      <div className="app-titlebar">
        <img src="/brand/openarch-mark-graphite.svg" alt="" />
        <span>OpenArch BIM</span>
        <div><i /><i /><i /></div>
      </div>
      <div className="app-toolbar">
        {['Modify', 'Wall', 'Floor', 'Door', 'Window', 'Roof'].map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="app-body">
        <aside>
          <b>Project browser</b>
          <span>⌄ Views</span>
          <small>Floor Plans</small>
          <small>Elevations</small>
          <span>⌄ Families</span>
          <small>Architecture</small>
          <small>Structure</small>
        </aside>
        <div className="app-canvas">
          {sheet ? (
            <div className="drawing-sheet">
              <div className="plan-drawing"><i /><i /><i /><i /></div>
              <div className="elevation-drawing"><i /><i /><i /></div>
              <div className="title-block">A.201 <b>General arrangement</b></div>
            </div>
          ) : (
            <svg className="model-drawing" fill="none" viewBox="0 0 650 390">
              <path d="m110 286 203 83 248-116-202-78-249 111Z" />
              <path d="m110 286 3-146 201 75-1 154m46-194 2-145 202 74-2 149M113 140 361 30m-47 185L563 104" />
              <path d="M156 265v-85l51 19v88m45 19v-90l37 14v91m106-88V91l54 20v97m39-18v-64l47 17v26" />
              <path className="accent-line" d="m113 140 201 75 249-111" />
            </svg>
          )}
          <span className="view-label">{sheet ? 'Sheet A.201' : '3D View · Coordination'}</span>
        </div>
        <aside className="properties-panel">
          <b>Properties</b>
          <span>Constraints</span>
          <small>Level 02</small>
          <span>Dimensions</span>
          <small>Area 126.4 m²</small>
          <span>Identity data</span>
        </aside>
      </div>
    </div>
  )
}

export default function App() {
  useMotion()
  return (
    <main className="overflow-hidden">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="OpenArch BIM home">
          <img src="/brand/openarch-logo.svg" alt="OpenArch BIM" />
        </a>

        <nav aria-label="Primary navigation">
          <a href="#technical">Technical</a>
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
        </nav>

        <a className="header-cta" href="#download">
          Download free <ArrowIcon diagonal />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            <span className="eyebrow-line" />
            Free and open source BIM
          </div>
          <h1 className="reveal reveal-delay-1">
            BIM software,
            <br />
            <em>completely free.</em>
          </h1>
          <p className="hero-intro reveal reveal-delay-2">
            OpenArch BIM is a free, open source program for designing and
            documenting buildings. No subscription, no account, and it runs on
            Windows, macOS and Linux.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button button-dark" href="#download">
              Download for free <ArrowIcon />
            </a>
            <a className="text-link" href="#features">
              See what it can do <ArrowIcon diagonal />
            </a>
          </div>
          <div className="version-note reveal reveal-delay-3">
            <span className="status-dot" />
            Free · Version 1.4 · Windows, macOS & Linux
          </div>
          <div className="hero-mark" aria-hidden="true">
            <img src="/brand/openarch-mark-graphite.svg" alt="" />
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-2">
          <img
            src={heroImage}
            alt="Sculptural concrete facade of a contemporary building"
          />
          <div className="visual-label">
            <span>Community project</span>
            <strong>House 07 / Helsinki</strong>
          </div>
          <div className="drawing-card" aria-hidden="true">
            <span>AX–02</span>
            <svg fill="none" viewBox="0 0 190 105">
              <path d="M16 88V45L75 13l74 32v43M75 13v75m74-43 25-14v57H16" />
              <path d="M37 88V57l22-12v43m37 0V47l31 14v27m-7-64 29 21" />
            </svg>
            <small>East elevation · 1:100</small>
          </div>
        </div>

        <div className="scroll-note">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
        </div>
      </section>

      <section className="technical" id="technical">
        <div className="technical-intro">
          <p className="section-kicker">Under the hood</p>
          <h2>Modern tech,<br />no <em>baggage.</em></h2>
          <p>OpenArch is written from scratch to be fast, private and easy to extend, with no legacy code holding it back.</p>
        </div>
        <div className="technical-list">
          {technicalDetails.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-heading">
          <p className="section-kicker light">What it does</p>
          <h2>The tools you<br />actually <em>use.</em></h2>
          <p>
            Familiar BIM tools, with every feature tied to the model so a
            change in one place updates everywhere.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span className="capability-number">{item.number}</span>
              <div>
                <CapabilityIcon id={item.number} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="capability-arrow"><ArrowIcon diagonal /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="screenshots" id="screenshots">
        <div className="screenshots-heading">
          <div>
            <p className="section-kicker">Screenshots</p>
            <h2>A workspace built<br />for getting <em>work done.</em></h2>
          </div>
          <p>The tools you need are close at hand and the model stays front and centre.</p>
        </div>
        <div className="screen screen-primary">
          <InterfacePreview />
          <div className="screen-caption"><span>01 / 3D modelling</span><p>Model, inspect and edit building elements in one view.</p></div>
        </div>
        <div className="screen screen-secondary">
          <InterfacePreview sheet />
          <div className="screen-caption"><span>02 / Documentation</span><p>Build sheets straight from live project views.</p></div>
        </div>
      </section>

      <section className="download" id="download">
        <div className="download-mark">
          <img src="/brand/openarch-mark-cloud.svg" alt="" />
        </div>
        <p className="section-kicker light">Download</p>
        <h2>Download it.<br /><em>It's free.</em></h2>
        <p>Free to use, with no account and no subscription. Pick your platform.</p>
        <div className="platform-downloads">
          {[
            ['Windows', 'Windows 10 or later', 'x64'],
            ['macOS', 'macOS 13 or later', 'Universal'],
            ['Linux', 'AppImage', 'x86_64'],
          ].map(([name, requirement, build]) => (
            <a href="#release" key={name}>
              <span className="platform-mark">{name.slice(0, 1)}</span>
              <div><strong>{name}</strong><small>{requirement}</small></div>
              <i>{build}</i>
              <ArrowIcon />
            </a>
          ))}
        </div>
        <div className="release-info" id="release">
          <span><i className="status-dot" /> Current release <strong>OpenArch 1.4.0</strong></span>
          <a href="#roadmap">Release notes <ArrowIcon diagonal /></a>
          <a href="#roadmap" id="roadmap">View roadmap <ArrowIcon diagonal /></a>
        </div>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="OpenArch BIM home">
          <img src="/brand/openarch-logo-reversed.svg" alt="OpenArch BIM" />
        </a>
        <p>Free, open source BIM software.</p>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#technical">Technical</a>
          <a href="#screenshots">Screenshots</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 OpenArch BIM</span>
          <span>Released under GNU GPL v3.0</span>
          <span>
            Photography via{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>
          </span>
        </div>
      </footer>
    </main>
  )
}

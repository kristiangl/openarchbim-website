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

const capabilities = [
  {
    number: '01',
    title: 'Parametric by default',
    text: 'Drive dimensions, relationships, and geometry with parameters that stay editable throughout the project.',
  },
  {
    number: '02',
    title: 'Build custom families',
    text: 'Create reusable, intelligent building components without leaving the application or learning another tool.',
  },
  {
    number: '03',
    title: 'Schedules with real logic',
    text: 'Build schedules with custom properties, formulas, calculated values, grouping, and live model updates.',
  },
  {
    number: '04',
    title: 'Legends that work',
    text: 'Place live components in legends and control their representation without brittle workarounds.',
  },
  {
    number: '05',
    title: 'Purpose-built 2D drafting',
    text: 'Create details and drafting views with the precision tools you expect from professional BIM software.',
  },
]

const technicalDetails = [
  ['01', 'Built in Rust', 'Fast, memory-safe, and engineered for projects that grow in complexity.'],
  ['02', 'Open source', 'Inspect the code, shape the roadmap, and keep your project data in your hands.'],
  ['03', 'Truly native', 'No web view. No wrapped browser. A responsive desktop application built for your OS.'],
  ['04', 'Immediately familiar', 'A clear, proven BIM layout so experienced teams can start working right away.'],
  ['05', 'Local by default', 'Runs entirely on your machine. No mandatory account, cloud, or internet connection.'],
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
          Get OpenArch <ArrowIcon diagonal />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            <span className="eyebrow-line" />
            Open source building design
          </div>
          <h1 className="reveal reveal-delay-1">
            Architecture,
            <br />
            <em>built openly.</em>
          </h1>
          <p className="hero-intro reveal reveal-delay-2">
            A professional BIM platform shaped by architects, engineers, and
            makers. Powerful by design. Open by nature.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button button-dark" href="#download">
              Download for free <ArrowIcon />
            </a>
            <a className="text-link" href="#features">
              Explore the platform <ArrowIcon diagonal />
            </a>
          </div>
          <div className="version-note reveal reveal-delay-3">
            <span className="status-dot" />
            Version 1.4 available · macOS, Windows & Linux
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
          <p className="section-kicker">A solid foundation</p>
          <h2>Modern under<br />the <em>surface.</em></h2>
          <p>OpenArch is built from the ground up to be fast, private, extensible, and dependable—without legacy baggage.</p>
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
          <p className="section-kicker light">BIM, without the friction</p>
          <h2>The details<br />done <em>right.</em></h2>
          <p>
            Familiar tools, rebuilt around the way architects actually work.
            Every feature stays connected to the model and under your control.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span className="capability-number">{item.number}</span>
              <div>
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
            <p className="section-kicker">Inside OpenArch</p>
            <h2>A workspace that<br />gets out of the way.</h2>
          </div>
          <p>Purpose-built for focus, with the tools you need close at hand and the model always at the centre.</p>
        </div>
        <div className="screen screen-primary">
          <InterfacePreview />
          <div className="screen-caption"><span>01 / 3D modelling</span><p>Model, inspect, and edit building elements in one responsive view.</p></div>
        </div>
        <div className="screen screen-secondary">
          <InterfacePreview sheet />
          <div className="screen-caption"><span>02 / Documentation</span><p>Compose coordinated sheets directly from live project views.</p></div>
        </div>
      </section>

      <section className="download" id="download">
        <div className="download-mark">
          <img src="/brand/openarch-mark-cloud.svg" alt="" />
        </div>
        <p className="section-kicker light">Get the app</p>
        <h2>Start building<br /><em>open.</em></h2>
        <p>Free to use. No account required. Choose your platform.</p>
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
        <p>Open tools for an open built environment.</p>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#technical">Technical</a>
          <a href="#screenshots">Screenshots</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2025 OpenArch BIM</span>
          <span>Released under GNU GPL v3.0</span>
        </div>
      </footer>
    </main>
  )
}

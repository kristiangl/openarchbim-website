import type { ReactNode } from 'react'
import { useMotion } from './motion'
import { GITHUB_URL, SITE_MODE, SUPPORT_URL } from './config'
import { roadmap } from './roadmap'

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

const comingSoon = SITE_MODE === 'coming-soon'

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
    text: comingSoon
      ? 'Bring in projects from other BIM software through IFC and a converter, so you do not start from scratch.'
      : 'Open .rvt project files and carry on working without rebuilding your models.',
  },
]

const technicalDetails = [
  ['01', 'Built in Rust', 'Fast and memory-safe, so large projects stay responsive.'],
  ['02', 'Free and open source', 'No licence fees or subscriptions. Read the code, suggest changes, and keep your data.'],
  ['03', 'Desktop app', 'Installs and runs on your computer like any other program, with a GPU-accelerated 3D view.'],
  ['04', 'Familiar layout', 'A standard BIM layout, so experienced users can start straight away.'],
  ['05', 'Local by default', 'Runs on your machine. No account, no cloud, no internet needed.'],
  [
    '06',
    'Open standards',
    comingSoon
      ? 'Designed around IFC, with an open project file you can inspect yourself.'
      : 'IFC support and a documented project format, so your files are never locked in.',
  ],
]

const screens = [
  {
    className: 'screen-primary',
    src: '/screenshots/3d-view.png',
    alt: 'OpenArch BIM showing a 3D view of a small building with a hip roof, door and window',
    label: '01 / 3D view',
    text: 'Layered walls, doors, windows and a hip roof, shown in 3D.',
  },
  {
    className: 'screen-secondary',
    src: '/screenshots/floor-plan.png',
    alt: 'OpenArch BIM showing a floor plan with grids, dimensions, a door and a section line',
    label: '02 / Floor plan',
    text: 'Plans with grids, levels, dimensions and section markers.',
  },
  {
    className: 'screen-tertiary',
    src: '/screenshots/elevation.png',
    alt: 'OpenArch BIM showing a south elevation with levels, grids, a door and a window',
    label: '03 / Elevation',
    text: 'Elevations drawn from the model, with levels and grids you can drag.',
  },
]

function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function Story() {
  return (
    <section className="story" id="story">
      <div className="story-copy">
        <p className="section-kicker">Why I'm building this</p>
        <h2>BIM that small practices <em>can afford.</em></h2>
        <p>
          I work at a small architecture firm in Australia. The fees for BIM
          software packages have become extremely expensive, leaving smaller
          practices unable to afford the fees.
        </p>
        <p>
          I have decided to build OpenArch BIM, a forever free, open-source
          alternative to the other big BIM programs.
        </p>
        <p>
          I am building it with AI, and I am being thorough, so it is using a
          lot of usage credits. If you want to help me speed up development,
          feel free to send me a few dollars to purchase usage credits.
        </p>
        <p className="story-sign">Kristian</p>
      </div>
      <aside className="support-card">
        <p className="section-kicker">Help it along</p>
        <h3>A few dollars buys more credits</h3>
        <p>Usage credits are what speed up development. Anything helps.</p>
        <ExternalLink className="button button-coffee" href={SUPPORT_URL}>
          Buy me a coffee <ArrowIcon />
        </ExternalLink>
        <ExternalLink className="text-link" href={GITHUB_URL}>
          Follow along on GitHub <ArrowIcon diagonal />
        </ExternalLink>
      </aside>
    </section>
  )
}

function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">
      <div className="roadmap-heading">
        <p className="section-kicker light">Roadmap</p>
        <h2>Where it's <em>at.</em></h2>
        <p>
          What works today, what I'm building now and what comes after. No
          dates, just the order I'm working in.
        </p>
      </div>
      <div className="roadmap-columns">
        {roadmap.map((column) => (
          <article key={column.id} className={`roadmap-column roadmap-${column.id}`}>
            <header>
              <span className="roadmap-dot" />
              <h3>{column.label}</h3>
              <small>{column.blurb}</small>
            </header>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="roadmap-cta">
        <p>Want it sooner? Every contribution goes towards usage credits.</p>
        <div>
          <ExternalLink className="button button-coffee" href={SUPPORT_URL}>
            Buy me a coffee <ArrowIcon />
          </ExternalLink>
          <ExternalLink className="text-link light" href={GITHUB_URL}>
            View on GitHub <ArrowIcon diagonal />
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}

function Technical() {
  return (
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
  )
}

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-heading">
        <p className="section-kicker light">{comingSoon ? "What it's aiming for" : 'What it does'}</p>
        <h2>The tools you<br />actually <em>use.</em></h2>
        <p>
          {comingSoon
            ? 'Familiar BIM tools, with every feature tied to the model so a change in one place updates everywhere. The roadmap below shows what works today.'
            : 'Familiar BIM tools, with every feature tied to the model so a change in one place updates everywhere.'}
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
  )
}

function Screenshots() {
  return (
    <section className="screenshots" id="screenshots">
      <div className="screenshots-heading">
        <div>
          <p className="section-kicker">{comingSoon ? 'Early builds' : 'Screenshots'}</p>
          <h2>A workspace built<br />for getting <em>work done.</em></h2>
        </div>
        <p>
          {comingSoon
            ? 'Real screenshots from the current build. It is still early, and it is changing every week.'
            : 'The tools you need are close at hand and the model stays front and centre.'}
        </p>
      </div>
      {screens.map((screen) => (
        <div key={screen.src} className={`screen ${screen.className}`}>
          <img
            className="screen-img"
            src={screen.src}
            width={1602}
            height={948}
            alt={screen.alt}
            loading="lazy"
          />
          <div className="screen-caption"><span>{screen.label}</span><p>{screen.text}</p></div>
        </div>
      ))}
    </section>
  )
}

function Download() {
  return (
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
          {comingSoon ? (
            <>
              <a href="#story">Story</a>
              <a href="#screenshots">Screenshots</a>
              <a href="#features">Features</a>
              <a href="#roadmap">Roadmap</a>
            </>
          ) : (
            <>
              <a href="#technical">Technical</a>
              <a href="#features">Features</a>
              <a href="#screenshots">Screenshots</a>
            </>
          )}
        </nav>

        {comingSoon ? (
          <ExternalLink className="header-cta" href={SUPPORT_URL}>
            Support the project <ArrowIcon diagonal />
          </ExternalLink>
        ) : (
          <a className="header-cta" href="#download">
            Download free <ArrowIcon diagonal />
          </a>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            <span className="eyebrow-line" />
            {comingSoon ? 'Coming soon · Free and open source' : 'Free and open source BIM'}
          </div>
          <h1 className="reveal reveal-delay-1">
            BIM software,
            <br />
            <em>completely free.</em>
          </h1>
          <p className="hero-intro reveal reveal-delay-2">
            {comingSoon
              ? "OpenArch BIM is a free, open source BIM program for designing and documenting buildings, made for the small practices that big software prices out. It's in active development and not ready to download yet."
              : 'OpenArch BIM is a free, open source program for designing and documenting buildings. No subscription, no account, and it runs on Windows, macOS and Linux.'}
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            {comingSoon ? (
              <>
                <ExternalLink className="button button-dark" href={GITHUB_URL}>
                  View on GitHub <ArrowIcon diagonal />
                </ExternalLink>
                <a className="text-link" href="#story">
                  Read the story <ArrowIcon />
                </a>
              </>
            ) : (
              <>
                <a className="button button-dark" href="#download">
                  Download for free <ArrowIcon />
                </a>
                <a className="text-link" href="#features">
                  See what it can do <ArrowIcon diagonal />
                </a>
              </>
            )}
          </div>
          <div className="version-note reveal reveal-delay-3">
            <span className="status-dot" />
            {comingSoon
              ? 'In development · Windows and macOS'
              : 'Free · Version 1.4 · Windows, macOS & Linux'}
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
            {comingSoon ? (
              <>
                <span>In development</span>
                <strong>Early builds shown below</strong>
              </>
            ) : (
              <>
                <span>Community project</span>
                <strong>House 07 / Helsinki</strong>
              </>
            )}
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

      {comingSoon ? (
        <>
          <Story />
          <Screenshots />
          <Features />
          <Technical />
          <Roadmap />
        </>
      ) : (
        <>
          <Technical />
          <Features />
          <Screenshots />
          <Download />
        </>
      )}

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="OpenArch BIM home">
          <img src="/brand/openarch-logo-reversed.svg" alt="OpenArch BIM" />
        </a>
        <p>Free, open source BIM software.</p>
        <div className="footer-links">
          {comingSoon ? (
            <>
              <a href="#story">Story</a>
              <a href="#roadmap">Roadmap</a>
              <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>
              <ExternalLink href={SUPPORT_URL}>Support</ExternalLink>
            </>
          ) : (
            <>
              <a href="#features">Features</a>
              <a href="#technical">Technical</a>
              <a href="#screenshots">Screenshots</a>
              <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>
            </>
          )}
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 OpenArch BIM</span>
          <span>{comingSoon ? 'Free and open source' : 'Released under GNU GPL v3.0'}</span>
          <span>
            Photography via{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>
          </span>
        </div>
      </footer>
    </main>
  )
}

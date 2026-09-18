import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Building2,
  Hammer,
  Sofa,
  Ruler,
  HardHat,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import './style.css';

const projects = [
  [
    'The Ridge Residence',
    'Kiambu',
    'Residential Construction',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85'
  ],
  [
    'Kilimani Calm',
    'Nairobi',
    'Interior Design',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85'
  ],
  [
    'Westlands HQ',
    'Westlands',
    'Office Fit-Out',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85'
  ],
  [
    'Garden Estate Revival',
    'Nairobi',
    'Renovation',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85'
  ]
];

const services = [
  [
    '01',
    'BUILD',
    'New homes and commercial spaces from groundwork to handover',
    Building2
  ],
  [
    '02',
    'RENOVATE',
    'Thoughtful upgrades for existing spaces',
    Hammer
  ],
  [
    '03',
    'INTERIORS',
    'Material, lighting, furniture and spatial design',
    Sofa
  ],
  [
    '04',
    'FIT-OUT',
    'Polished workplaces built around real operations',
    Ruler
  ],
  [
    '05',
    'MANAGE',
    'Site coordination, timelines and quality control',
    HardHat
  ]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <header>
          <a className="logo" href="#" onClick={closeMenu}>
            APEX FORMWORKS LTD
            <small>BUILD + INTERIORS</small>
          </a>

          <nav className={menuOpen ? 'nav-open' : ''}>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#process" onClick={closeMenu}>
              Process
            </a>

            <a href="#quote" onClick={closeMenu}>
              Contact
            </a>

            <a
              className="mobile-project"
              href="#quote"
              onClick={closeMenu}
            >
              Start a Project
              <ArrowUpRight size={15} />
            </a>
          </nav>

          <a className="cta" href="#quote">
            START A PROJECT
            <ArrowUpRight size={15} />
          </a>

          <button
            className="menu"
            type="button"
            aria-label={
              menuOpen ? 'Close navigation' : 'Open navigation'
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? (
              <X size={27} />
            ) : (
              <Menu size={27} />
            )}
          </button>
        </header>

        <div className="shade" />

        <main>
          <p>NAIROBI • CONSTRUCTION • INTERIORS</p>

          <h1>
            WE SHAPE
            <b>SPACE.</b>
          </h1>

          <div className="heroline">
            <span>
              Architecture-minded construction and interiors for
              people who expect more from the places they live and work.
            </span>

            <a href="#projects">
              EXPLORE WORK ↓
            </a>
          </div>
        </main>
      </section>

      {/* INTRO */}
      <section className="intro">
        <span>01</span>

        <div>
          <i>THE STUDIO</i>

          <h2>
            Good spaces aren't decorated.
            <br />
            <em>They're considered.</em>
          </h2>
        </div>

        <p>
          From first site visit to final finish, Apex Formworks
          brings construction discipline and interior sensitivity
          into the same conversation. Fewer disconnects. Better
          decisions. Stronger spaces.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <i>WHAT WE DO</i>

        <h2>
          ONE TEAM.
          <br />
          FIVE CAPABILITIES.
        </h2>

        {services.map(([n, t, d, Icon]) => (
          <article key={t}>
            <small>{n}</small>

            <Icon />

            <h3>{t}</h3>

            <p>{d}</p>

            <ArrowUpRight />
          </article>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="title">
          <div>
            <i>SELECTED WORK</i>

            <h2>Built with intent.</h2>
          </div>

          <p>
            A selection of residential, commercial and interior
            projects across Nairobi and its surroundings.
          </p>
        </div>

        <div className="grid">
          {projects.map((p, i) => (
            <article
              className={i === 0 ? 'feature' : ''}
              key={p[0]}
            >
              <img
                src={p[3]}
                alt={p[0]}
              />

              <div>
                <small>{p[2]}</small>

                <h3>{p[0]}</h3>

                <p>
                  <MapPin size={13} />
                  {p[1]}
                </p>
              </div>

              <b>0{i + 1}</b>
            </article>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="band">
        <small>
          YOUR SPACE SHOULD WORK HARDER.
        </small>

        <div>
          BUILD BETTER — LIVE BETTER
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div>
          <i>HOW WE WORK</i>

          <h2>
            Clear from day one.
          </h2>

          <p>
            No mystery process. Every project moves through
            defined stages, with decisions made when they matter.
          </p>
        </div>

        <aside>
          {[
            [
              '01',
              'Discover',
              'Site, brief, budget and ambition.'
            ],
            [
              '02',
              'Define',
              'Scope, materials, programme and costs.'
            ],
            [
              '03',
              'Deliver',
              'Coordinated execution and quality on site.'
            ],
            [
              '04',
              'Handover',
              'Final checks and a space ready to use.'
            ]
          ].map(x => (
            <article key={x[0]}>
              <b>{x[0]}</b>

              <h3>{x[1]}</h3>

              <p>{x[2]}</p>
            </article>
          ))}
        </aside>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <b>48+</b>
          <span>PROJECTS DELIVERED</span>
        </div>

        <div>
          <b>7</b>
          <span>YEARS OF PRACTICE</span>
        </div>

        <div>
          <b>5</b>
          <span>CORE SERVICES</span>
        </div>

        <div>
          <b>1</b>
          <span>ACCOUNTABLE TEAM</span>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote" id="quote">
        <div>
          <i>START A PROJECT</i>

          <h2>
            Have a space in mind?
          </h2>

          <p>
            Tell us what you're planning. We'll use the details
            to prepare for an initial consultation and site
            discussion.
          </p>
        </div>

        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full name"
          />

          <input
            type="tel"
            placeholder="+254 Phone"
          />

          <select defaultValue="">
            <option value="" disabled>
              Project type
            </option>

            <option>
              New construction
            </option>

            <option>
              Renovation
            </option>

            <option>
              Interior design
            </option>

            <option>
              Office fit-out
            </option>
          </select>

          <input
            type="text"
            placeholder="Location"
          />

          <select defaultValue="">
            <option value="" disabled>
              Approximate budget
            </option>

            <option>
              Under KSh 1M
            </option>

            <option>
              KSh 1M – 5M
            </option>

            <option>
              KSh 5M – 15M
            </option>

            <option>
              KSh 15M+
            </option>
          </select>

          <textarea
            placeholder="Tell us about the project..."
            rows="4"
          />

          <button type="submit">
            REQUEST CONSULTATION →
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-brand">
          <strong>
            APEX
            <br />
            FORMWORKS
          </strong>

          <p>
            Construction and interior spaces designed with
            purpose, built with discipline.
          </p>
        </div>

        <div className="footer-column">
          <h4>CONTACT</h4>

          <a href="tel:+254712345678">
            +254 712 345 678
          </a>

          <a href="mailto:hello@apexformworks.co.ke">
            hello@apexformworks.co.ke
          </a>

          <span>
            Nairobi, Kenya
          </span>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>

          <a href="#services">
            Services
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#process">
            Our Process
          </a>

          <a href="#quote">
            Start a Project
          </a>
        </div>

        <div className="footer-column">
          <h4>CONNECT</h4>

          <a href="#">
            Instagram ↗
          </a>

          <a href="#">
            LinkedIn ↗
          </a>

          <a href="#">
            WhatsApp ↗
          </a>

          <span className="hours">
            MON–SAT
            <br />
            8:00 AM — 5:30 PM
          </span>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 APEX FORMWORKS LTD.
          </span>

          <span>
            NAIROBI • KENYA
          </span>
        </div>

      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
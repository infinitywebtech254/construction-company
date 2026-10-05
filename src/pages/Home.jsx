import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  Hammer,
  Sofa,
  Ruler,
  HardHat,
  MapPin,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "BUILD",
    description:
      "New homes and commercial spaces from groundwork to handover.",
    icon: Building2,
    path: "/services/build",
  },
  {
    number: "02",
    title: "RENOVATE",
    description:
      "Thoughtful upgrades that give existing spaces a new purpose.",
    icon: Hammer,
    path: "/services/renovation",
  },
  {
    number: "03",
    title: "INTERIORS",
    description:
      "Material, lighting, furniture and spatial design.",
    icon: Sofa,
    path: "/services/interiors",
  },
  {
    number: "04",
    title: "FIT-OUT",
    description:
      "Polished workplaces built around real operations.",
    icon: Ruler,
    path: "/services/fit-out",
  },
  {
    number: "05",
    title: "MANAGE",
    description:
      "Site coordination, timelines and quality control.",
    icon: HardHat,
    path: "/services/project-management",
  },
];

const projects = [
  [
    "The Ridge Residence",
    "Kiambu",
    "Residential Construction",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  ],
  [
    "Kilimani Calm",
    "Nairobi",
    "Interior Design",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  ],
  [
    "Westlands HQ",
    "Westlands",
    "Office Fit-Out",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  ],
];

export default function Home() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero home-hero">
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

            <Link to="/projects">
              EXPLORE WORK ↓
            </Link>
          </div>
        </main>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

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


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services home-services">
        <div className="section-topline">
          <i>WHAT WE DO</i>

          <span className="services-label">
            EXPLORE OUR CAPABILITIES
          </span>
        </div>

        <h2>
          ONE TEAM.
          <br />
          FIVE CAPABILITIES.
        </h2>

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              className="service-row-link"
              to={service.path}
              key={service.title}
            >
              <article>
                <small>{service.number}</small>

                <Icon />

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ArrowUpRight />
              </article>
            </Link>
          );
        })}
      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="projects home-projects">
        <div className="title">
          <div>
            <i>SELECTED WORK</i>

            <h2>Built with intent.</h2>
          </div>

          <div className="title-side">
            <p>
              A selection of residential, commercial and interior
              projects across Nairobi and its surroundings.
            </p>

            <Link to="/projects">
              EXPLORE ALL PROJECTS →
            </Link>
          </div>
        </div>

        <div className="grid">
          {projects.map((project, index) => (
            <article
              className={index === 0 ? "feature" : ""}
              key={project[0]}
            >
              <img
                src={project[3]}
                alt={project[0]}
              />

              <div>
                <small>{project[2]}</small>

                <h3>{project[0]}</h3>

                <p>
                  <MapPin size={13} />
                  {project[1]}
                </p>
              </div>

              <b>0{index + 1}</b>
            </article>
          ))}
        </div>
      </section>


      {/* =====================================================
          BAND
      ===================================================== */}

      <section className="band">
        <small>YOUR SPACE SHOULD WORK HARDER.</small>

        <div>BUILD BETTER — LIVE BETTER</div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="process home-process">
        <div>
          <i>HOW WE WORK</i>

          <h2>Clear from day one.</h2>

          <p>
            No mystery process. Every project moves through defined
            stages, with decisions made when they matter.
          </p>

          <Link
            className="text-link"
            to="/process"
          >
            SEE OUR FULL PROCESS
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <aside>
          {[
            [
              "01",
              "Discover",
              "Site, brief, budget and ambition.",
            ],
            [
              "02",
              "Define",
              "Scope, materials, programme and costs.",
            ],
            [
              "03",
              "Deliver",
              "Coordinated execution and quality on site.",
            ],
            [
              "04",
              "Handover",
              "Final checks and a space ready to use.",
            ],
          ].map((item) => (
            <article key={item[0]}>
              <b>{item[0]}</b>

              <h3>{item[1]}</h3>

              <p>{item[2]}</p>
            </article>
          ))}
        </aside>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

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


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-cta">
        <div>
          <i>START A PROJECT</i>

          <h2>
            HAVE A SPACE
            <br />
            <span>IN MIND?</span>
          </h2>
        </div>

        <div>
          <p>
            Whether you're building from the ground up, renovating
            an existing property or transforming an interior, start
            the conversation with our team.
          </p>

          <Link to="/contact">
            START YOUR PROJECT
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
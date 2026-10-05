import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "The Ridge Residence",
    location: "Kiambu",
    category: "Residential Construction",
    description:
      "A contemporary residential project balancing strong architectural lines, natural light and practical family living.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
  },
  {
    number: "02",
    name: "Kilimani Calm",
    location: "Kilimani, Nairobi",
    category: "Interior Design",
    description:
      "A warm residential interior shaped around restrained materials, soft tones and comfortable everyday spaces.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85"
  },
  {
    number: "03",
    name: "Westlands HQ",
    location: "Westlands, Nairobi",
    category: "Office Fit-Out",
    description:
      "A modern workplace designed around collaboration, focused work and a confident professional identity.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85"
  },
  {
    number: "04",
    name: "Garden Estate Revival",
    location: "Nairobi",
    category: "Renovation",
    description:
      "An existing residence refreshed through spatial improvements, contemporary finishes and carefully considered details.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
  },
  {
    number: "05",
    name: "Karen Residence",
    location: "Karen, Nairobi",
    category: "Residential Interiors",
    description:
      "A refined residential concept combining generous spaces, natural textures and understated contemporary detailing.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
  },
  {
    number: "06",
    name: "Upper Hill Offices",
    location: "Upper Hill, Nairobi",
    category: "Commercial Fit-Out",
    description:
      "A practical commercial environment planned around efficient circulation, meeting spaces and daily operations.",
    image:
      "https://images.unsplash.com/photo-1497366811364-ccf3f6e5b3f6?auto=format&fit=crop&w=1600&q=85"
  }
];

export default function Projects() {
  return (
    <>
      <section className="page-hero projects-hero">
        <div>
          <p>02 / SELECTED WORK</p>

          <h1>
            SPACES BUILT
            <br />
            WITH <span>INTENT.</span>
          </h1>
        </div>

        <p className="page-hero-copy">
          Residential, commercial and interior projects shaped by
          clear thinking, disciplined execution and attention to
          detail.
        </p>
      </section>

      <section className="projects-page">
        <div className="projects-page-intro">
          <span>PROJECTS</span>

          <p>
            Every project begins with different constraints,
            ambitions and people. Our role is to turn those variables
            into spaces that work.
          </p>
        </div>

        <div className="projects-showcase">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-image">
                <img
                  src={project.image}
                  alt={project.name}
                />

                <span>{project.number}</span>
              </div>

              <div className="project-card-info">
                <small>{project.category}</small>

                <h2>{project.name}</h2>

                <p className="project-location">
                  <MapPin size={14} />
                  {project.location}
                </p>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div>
          <small>YOUR PROJECT COULD BE NEXT.</small>

          <h2>
            LET'S BUILD
            <br />
            <span>SOMETHING BETTER.</span>
          </h2>
        </div>

        <div>
          <p>
            Have a residential, commercial, renovation or interior
            project in mind? Start the conversation with our team.
          </p>

          <Link to="/contact">
            DISCUSS YOUR PROJECT
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
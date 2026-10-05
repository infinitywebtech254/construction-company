import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  Hammer,
  Sofa,
  Ruler,
  HardHat,
  Check
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "BUILD",
    subtitle: "Construction",
    description:
      "Ground-up residential and commercial construction managed from site preparation through to final handover.",
    items: [
      "Residential construction",
      "Commercial construction",
      "Structural works",
      "Finishes & detailing",
      "Site coordination"
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
  },
  {
    number: "02",
    icon: Hammer,
    title: "RENOVATE",
    subtitle: "Renovation",
    description:
      "Existing spaces reworked with purpose — improving function, finishes and the way the property is experienced.",
    items: [
      "Home renovations",
      "Commercial renovations",
      "Kitchen upgrades",
      "Bathroom upgrades",
      "Structural alterations"
    ],
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1400&q=85"
  },
  {
    number: "03",
    icon: Sofa,
    title: "INTERIORS",
    subtitle: "Interior Design",
    description:
      "Considered interiors built around material, proportion, lighting, furniture and the everyday experience of a space.",
    items: [
      "Interior concepts",
      "Space planning",
      "Material selection",
      "Lighting coordination",
      "Furniture & finishes"
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
  },
  {
    number: "04",
    icon: Ruler,
    title: "FIT-OUT",
    subtitle: "Commercial Fit-Out",
    description:
      "Functional, polished workplaces and commercial interiors delivered around the practical needs of the business.",
    items: [
      "Office fit-outs",
      "Retail interiors",
      "Partitions & ceilings",
      "Joinery",
      "Finishing works"
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
  },
  {
    number: "05",
    icon: HardHat,
    title: "MANAGE",
    subtitle: "Project Management",
    description:
      "Structured project coordination focused on programme, workmanship, communication and accountability throughout delivery.",
    items: [
      "Site supervision",
      "Contractor coordination",
      "Programme management",
      "Quality control",
      "Project reporting"
    ],
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85"
  }
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p>01 / OUR CAPABILITIES</p>

          <h1>
            FROM FIRST IDEA
            <br />
            TO <span>FINAL FINISH.</span>
          </h1>
        </div>

        <p className="page-hero-copy">
          Construction, renovation and interior expertise brought
          together under one accountable team.
        </p>
      </section>

      <section className="services-intro">
        <span>WHAT WE DO</span>

        <h2>
          FIVE CAPABILITIES.
          <br />
          <em>ONE STANDARD.</em>
        </h2>

        <p>
          We approach every project as a complete space rather than
          a collection of disconnected trades. That means design
          decisions, construction realities and final finishes are
          considered together.
        </p>
      </section>

      <section className="services-page">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              className={`service-feature ${
                index % 2 !== 0 ? "service-reverse" : ""
              }`}
              key={service.title}
            >
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.subtitle}
                />

                <span>{service.number}</span>
              </div>

              <div className="service-content">
                <div className="service-heading">
                  <Icon size={30} />

                  <div>
                    <small>{service.subtitle}</small>
                    <h2>{service.title}</h2>
                  </div>
                </div>

                <p>{service.description}</p>

                <div className="service-list">
                  {service.items.map((item) => (
                    <span key={item}>
                      <Check size={15} />
                      {item}
                    </span>
                  ))}
                </div>

                <Link to="/contact">
                  DISCUSS YOUR PROJECT
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <section className="page-cta">
        <div>
          <small>NOT SURE WHERE TO START?</small>

          <h2>
            TELL US ABOUT
            <br />
            <span>YOUR SPACE.</span>
          </h2>
        </div>

        <div>
          <p>
            Share your project, location and what you're hoping to
            achieve. We'll help you identify the right way forward.
          </p>

          <Link to="/contact">
            START A PROJECT
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
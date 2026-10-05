import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Search,
  PencilRuler,
  HardHat,
  KeyRound
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "DISCOVER",
    icon: Search,
    intro: "We begin by understanding the project before proposing the solution.",
    items: [
      "Initial consultation",
      "Site assessment",
      "Project objectives",
      "Budget conversation",
      "Needs & priorities"
    ]
  },
  {
    number: "02",
    title: "DEFINE",
    icon: PencilRuler,
    intro: "The brief becomes a clear scope, programme and direction for the work.",
    items: [
      "Scope definition",
      "Design direction",
      "Material planning",
      "Cost alignment",
      "Project programme"
    ]
  },
  {
    number: "03",
    title: "DELIVER",
    icon: HardHat,
    intro: "The plan moves to site with coordination, supervision and quality control.",
    items: [
      "Site mobilisation",
      "Construction & fit-out",
      "Trade coordination",
      "Progress updates",
      "Quality inspections"
    ]
  },
  {
    number: "04",
    title: "HANDOVER",
    icon: KeyRound,
    intro: "We close the project properly and prepare the finished space for use.",
    items: [
      "Final inspections",
      "Snag resolution",
      "Finishing checks",
      "Client walkthrough",
      "Project handover"
    ]
  }
];

export default function Process() {
  return (
    <>
      <section className="page-hero process-page-hero">
        <div>
          <p>04 / HOW WE WORK</p>

          <h1>
            CLEAR FROM
            <br />
            <span>DAY ONE.</span>
          </h1>
        </div>

        <p className="page-hero-copy">
          Defined stages, timely decisions and clear communication
          keep projects moving in the right direction.
        </p>
      </section>

      <section className="process-intro">
        <small>OUR PROCESS</small>

        <h2>
          LESS CONFUSION.
          <br />
          <em>BETTER DELIVERY.</em>
        </h2>

        <p>
          Construction projects involve hundreds of decisions. Our
          process gives those decisions an order so clients know
          what happens next and the team knows what needs to happen
          now.
        </p>
      </section>

      <section className="process-stages">
        {stages.map((stage) => {
          const Icon = stage.icon;

          return (
            <article key={stage.number}>
              <div className="process-number">
                {stage.number}
              </div>

              <div className="process-icon">
                <Icon size={35} />
              </div>

              <div className="process-stage-main">
                <h2>{stage.title}</h2>
                <p>{stage.intro}</p>
              </div>

              <div className="process-stage-list">
                {stage.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="process-quote">
        <small>OUR PRINCIPLE</small>

        <blockquote>
          “Make the important decisions early, communicate them
          clearly and execute them properly.”
        </blockquote>
      </section>

      <section className="page-cta">
        <div>
          <small>READY TO BEGIN?</small>

          <h2>
            EVERY PROJECT
            <br />
            <span>STARTS HERE.</span>
          </h2>
        </div>

        <div>
          <p>
            Tell us what you're planning and we'll start by
            understanding your site, priorities and budget.
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
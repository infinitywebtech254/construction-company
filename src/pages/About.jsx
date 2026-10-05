import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p>03 / ABOUT APEX</p>

          <h1>
            BUILDING WITH
            <br />
            <span>PURPOSE.</span>
          </h1>
        </div>

        <p className="page-hero-copy">
          Construction discipline and interior sensitivity brought
          together to create spaces that work as well as they look.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85"
            alt="Construction team at work"
          />
        </div>

        <div className="about-story-copy">
          <small>WHO WE ARE</small>

          <h2>
            ONE TEAM.
            <br />
            <em>ONE CONVERSATION.</em>
          </h2>

          <p className="large">
            Apex Formworks is a Nairobi-based construction and
            interiors practice focused on delivering thoughtful,
            functional and well-executed spaces.
          </p>

          <p>
            We believe the strongest projects happen when design,
            construction and delivery are treated as connected parts
            of the same process.
          </p>

          <p>
            Instead of separating ideas from execution, we bring the
            conversation together — helping clients make clearer
            decisions from the beginning through to handover.
          </p>
        </div>
      </section>

      <section className="about-beliefs">
        <div className="belief-heading">
          <small>WHAT MATTERS TO US</small>

          <h2>
            THE DETAILS ARE
            <br />
            <span>THE PROJECT.</span>
          </h2>
        </div>

        <div className="belief-list">
          <article>
            <CheckCircle2 />
            <div>
              <h3>Clear Communication</h3>
              <p>
                Straightforward conversations about scope,
                decisions, timelines and progress.
              </p>
            </div>
          </article>

          <article>
            <CheckCircle2 />
            <div>
              <h3>Considered Design</h3>
              <p>
                Every material, proportion and detail should have a
                reason for being there.
              </p>
            </div>
          </article>

          <article>
            <CheckCircle2 />
            <div>
              <h3>Disciplined Execution</h3>
              <p>
                Good ideas only matter when they are translated
                properly on site.
              </p>
            </div>
          </article>

          <article>
            <CheckCircle2 />
            <div>
              <h3>Accountability</h3>
              <p>
                One coordinated team with responsibility for moving
                the project forward.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-image-band">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
          alt="Contemporary interior"
        />

        <div>
          <small>OUR APPROACH</small>

          <h2>
            FUNCTION FIRST.
            <br />
            <span>DETAIL ALWAYS.</span>
          </h2>
        </div>
      </section>

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

      <section className="page-cta">
        <div>
          <small>WORK WITH APEX</small>

          <h2>
            YOUR SPACE.
            <br />
            <span>OUR FOCUS.</span>
          </h2>
        </div>

        <div>
          <p>
            Tell us what you're planning and we'll start with the
            questions that matter.
          </p>

          <Link to="/contact">
            START A CONVERSATION
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
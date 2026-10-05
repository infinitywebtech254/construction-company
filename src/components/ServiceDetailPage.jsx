import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  ChevronRight
} from "lucide-react";

export default function ServiceDetailPage({
  number,
  eyebrow,
  title,
  accent,
  intro,
  heroImage,
  overview,
  capabilities,
  process,
  secondaryImage,
  closingTitle,
  closingText
}) {
  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-hero-copy">
          <p className="service-detail-eyebrow">
            {number} / {eyebrow}
          </p>

          <h1>
            {title}
            <br />
            <span>{accent}</span>
          </h1>

          <p className="service-detail-intro">
            {intro}
          </p>

          <Link to="/contact" className="service-detail-cta">
            BOOK CONSULTATION
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="service-detail-hero-image">
          <img src={heroImage} alt={`${title} ${accent}`} />

          <span>{number}</span>
        </div>
      </section>

      <section className="service-overview">
        <div className="service-overview-label">
          <span>WHAT WE DO</span>
        </div>

        <div className="service-overview-main">
          <h2>
            BUILT AROUND
            <br />
            <em>YOUR PROJECT.</em>
          </h2>

          <p>{overview}</p>
        </div>
      </section>

      <section className="service-capabilities">
        <div className="service-capability-image">
          <img
            src={secondaryImage}
            alt={`${title} project`}
          />
        </div>

        <div className="service-capability-content">
          <p className="service-section-label">
            OUR CAPABILITIES
          </p>

          <h2>
            WHAT'S
            <br />
            <span>INCLUDED.</span>
          </h2>

          <div className="capability-list">
            {capabilities.map((item, index) => (
              <div key={item}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{item}</p>

                <Check size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="service-process-heading">
          <p>HOW WE WORK</p>

          <h2>
            FROM BRIEF
            <br />
            TO <span>HANDOVER.</span>
          </h2>
        </div>

        <div className="service-process-list">
          {process.map((step, index) => (
            <article key={step.title}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              <ChevronRight size={20} />
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-closing">
        <div>
          <small>START A PROJECT</small>

          <h2>
            {closingTitle}
          </h2>
        </div>

        <div>
          <p>{closingText}</p>

          <Link to="/contact">
            BOOK CONSULTATION
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
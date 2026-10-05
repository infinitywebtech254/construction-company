import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>
          APEX
          <br />
          FORMWORKS
        </strong>

        <p>
          Construction and interior spaces designed with purpose,
          built with discipline.
        </p>
      </div>

      <div className="footer-column">
        <h4>CONTACT</h4>

        <a href="tel:+254722345875">
          +254 722 345 875
        </a>

        <a href="mailto:hello@apexformworks.co.ke">
          hello@apexformworks.co.ke
        </a>

        <span>Nairobi, Kenya</span>
      </div>

      <div className="footer-column">
        <h4>EXPLORE</h4>

        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Us</Link>
        <Link to="/process">Our Process</Link>
        <Link to="/contact">Start a Project</Link>
      </div>

      <div className="footer-column">
        <h4>CONNECT</h4>

        <a href="#">Instagram ↗</a>
        <a href="#">LinkedIn ↗</a>
        <a href="#">Facebook ↗</a>

        <a
          href="https://wa.me/254722345875"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp ↗
        </a>

        <span className="hours">
          MON–SAT
          <br />
          8:00 AM — 5:30 PM
        </span>
      </div>

      <div className="footer-bottom">
        <span>© 2026 APEX FORMWORKS LTD.</span>
        <span>NAIROBI • KENYA</span>
      </div>
    </footer>
  );
}
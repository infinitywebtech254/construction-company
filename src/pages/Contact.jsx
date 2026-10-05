import React, { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero contact-page-hero">
        <div>
          <p>05 / START A PROJECT</p>

          <h1>
            LET'S TALK
            <br />
            ABOUT <span>YOUR SPACE.</span>
          </h1>
        </div>

        <p className="page-hero-copy">
          Tell us what you're planning. A few details are enough to
          start the conversation.
        </p>
      </section>

      <section className="contact-page">
        <div className="contact-info">
          <small>GET IN TOUCH</small>

          <h2>
            START WITH
            <br />
            A CONVERSATION.
          </h2>

          <p>
            Whether you're building, renovating, fitting out an
            office or transforming an interior, tell us where you're
            starting from.
          </p>

          <div className="contact-details">
            <a href="tel:+254722345875">
              <Phone size={20} />

              <div>
                <small>CALL US</small>
                <strong>+254 722 345 875</strong>
              </div>
            </a>

            <a href="mailto:hello@apexformworks.co.ke">
              <Mail size={20} />

              <div>
                <small>EMAIL US</small>
                <strong>
                  hello@apexformworks.co.ke
                </strong>
              </div>
            </a>

            <div>
              <MapPin size={20} />

              <div>
                <small>LOCATION</small>
                <strong>Nairobi, Kenya</strong>
              </div>
            </div>

            <div>
              <Clock size={20} />

              <div>
                <small>WORKING HOURS</small>
                <strong>
                  Mon–Sat • 8:00 AM–5:30 PM
                </strong>
              </div>
            </div>
          </div>
        </div>

        <form
          className="project-form"
          onSubmit={handleSubmit}
        >
          <div className="form-heading">
            <span>PROJECT ENQUIRY</span>
            <b>01 — 06</b>
          </div>

          <div className="form-row">
            <label>
              YOUR NAME
              <input
                type="text"
                placeholder="Full name"
                required
              />
            </label>

            <label>
              PHONE NUMBER
              <input
                type="tel"
                placeholder="+254..."
                required
              />
            </label>
          </div>

          <label>
            EMAIL ADDRESS
            <input
              type="email"
              placeholder="you@email.com"
            />
          </label>

          <div className="form-row">
            <label>
              PROJECT TYPE
              <select defaultValue="" required>
                <option value="" disabled>
                  Select project type
                </option>

                <option>New Construction</option>
                <option>Renovation</option>
                <option>Interior Design</option>
                <option>Commercial Fit-Out</option>
                <option>Project Management</option>
              </select>
            </label>

            <label>
              PROJECT LOCATION
              <input
                type="text"
                placeholder="e.g. Karen, Nairobi"
              />
            </label>
          </div>

          <label>
            ESTIMATED BUDGET
            <select defaultValue="">
              <option value="" disabled>
                Select approximate budget
              </option>

              <option>Below KES 1M</option>
              <option>KES 1M – 3M</option>
              <option>KES 3M – 5M</option>
              <option>KES 5M – 10M</option>
              <option>KES 10M+</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label>
            TELL US ABOUT THE PROJECT
            <textarea
              placeholder="What are you planning? Tell us about the space, your goals and any timelines you have in mind."
              required
            />
          </label>

          <button type="submit">
            SEND PROJECT ENQUIRY
            <ArrowUpRight size={18} />
          </button>

          {sent && (
            <p className="form-success">
              Thanks — your project enquiry has been received.
              We'll be in touch shortly.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
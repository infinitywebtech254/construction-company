import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

const serviceLinks = [
  ["01", "Build", "/services/build"],
  ["02", "Renovation", "/services/renovation"],
  ["03", "Interiors", "/services/interiors"],
  ["04", "Commercial Fit-Out", "/services/fit-out"],
  ["05", "Project Management", "/services/project-management"]
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <Link className="logo" to="/" onClick={closeMenu}>
        <span>APEX FORMWORKS LTD</span>
        <small>BUILD + INTERIORS</small>
      </Link>

      <nav className={menuOpen ? "nav-open" : ""}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <div className="services-nav">
          <button
            type="button"
            className="services-trigger"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            Services

            <ChevronDown
              size={15}
              className={servicesOpen ? "chevron-open" : ""}
            />
          </button>

          <div
            className={
              servicesOpen
                ? "services-dropdown dropdown-open"
                : "services-dropdown"
            }
          >
            <div className="services-dropdown-heading">
              <small>OUR CAPABILITIES</small>
              <span>SELECT A SERVICE</span>
            </div>

            {serviceLinks.map(([number, label, url]) => (
              <Link
                key={url}
                to={url}
                onClick={closeMenu}
              >
                <span>{number}</span>

                <strong>{label}</strong>

                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </div>

        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>

        <NavLink to="/process" onClick={closeMenu}>
          Our Process
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <Link
          className="mobile-project"
          to="/contact"
          onClick={closeMenu}
        >
          Book Consultation
          <ArrowUpRight size={16} />
        </Link>
      </nav>

      <Link
        className="cta"
        to="/contact"
        onClick={closeMenu}
      >
        BOOK CONSULTATION
        <ArrowUpRight size={15} />
      </Link>

      <button
        className="menu"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => {
          setMenuOpen(!menuOpen);

          if (menuOpen) {
            setServicesOpen(false);
          }
        }}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  );
}
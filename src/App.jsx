import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

/* Individual Service Pages */
import Build from "./pages/services/Build";
import Renovation from "./pages/services/Renovation";
import Interiors from "./pages/services/Interiors";
import FitOut from "./pages/services/FitOut";
import ProjectManagement from "./pages/services/ProjectManagement";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/build" element={<Build />} />
        <Route path="/services/renovation" element={<Renovation />} />
        <Route path="/services/interiors" element={<Interiors />} />
        <Route path="/services/fit-out" element={<FitOut />} />
        <Route
          path="/services/project-management"
          element={<ProjectManagement />}
        />

        {/* Main Pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
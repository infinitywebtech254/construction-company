import React from "react";
import ServiceDetailPage from "../../components/ServiceDetailPage";

export default function Build() {
  return (
    <ServiceDetailPage
      number="01"
      eyebrow="BUILD"
      title="GROUND-UP"
      accent="CONSTRUCTION."
      intro="From the first site conversation to final handover, we coordinate the people, materials and decisions required to turn plans into finished spaces."
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85"
      overview="New construction requires more than getting work started on site. We approach each build as a coordinated process — aligning scope, structure, materials, workmanship and finishing so the completed property reflects the original intent."
      capabilities={[
        "Residential construction",
        "Commercial construction",
        "Structural works",
        "Masonry and building works",
        "Finishes and detailing",
        "Site coordination"
      ]}
      process={[
        {
          title: "Consultation",
          text: "We discuss the project, intended use, location, priorities and overall expectations."
        },
        {
          title: "Site & Scope",
          text: "We assess the site and establish the work required to deliver the project."
        },
        {
          title: "Planning",
          text: "Programme, materials, responsibilities and project requirements are coordinated before execution."
        },
        {
          title: "Construction",
          text: "The project moves to site with supervision, coordination and ongoing quality control."
        },
        {
          title: "Handover",
          text: "Final works are inspected, outstanding details are addressed and the completed space is handed over."
        }
      ]}
      secondaryImage="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1500&q=85"
      closingTitle={
        <>
          PLANNING A
          <br />
          <span>NEW BUILD?</span>
        </>
      }
      closingText="Tell us about the property you're planning, where the site is located and what you want the finished space to achieve."
    />
  );
}
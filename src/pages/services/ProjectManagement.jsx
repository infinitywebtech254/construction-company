import React from "react";
import ServiceDetailPage from "../../components/ServiceDetailPage";

export default function ProjectManagement() {
  return (
    <ServiceDetailPage
      number="05"
      eyebrow="PROJECT MANAGEMENT"
      title="CONTROL FROM"
      accent="START TO FINISH."
      intro="Structured coordination that keeps responsibilities, site activity, quality and project decisions moving together."
      heroImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85"
      overview="Even a strong design can struggle without proper coordination. Our project management service provides a clearer structure for execution by connecting the programme, contractors, site activity, quality requirements and client communication."
      capabilities={[
        "Project planning",
        "Site supervision",
        "Contractor coordination",
        "Programme monitoring",
        "Quality control",
        "Progress reporting"
      ]}
      process={[
        {
          title: "Define",
          text: "We establish responsibilities, scope, priorities and the framework for managing delivery."
        },
        {
          title: "Programme",
          text: "Key activities and dependencies are organised into a practical project sequence."
        },
        {
          title: "Coordinate",
          text: "Contractors, suppliers and site activities are aligned around the work required."
        },
        {
          title: "Monitor",
          text: "Progress and workmanship are reviewed while issues are identified and communicated."
        },
        {
          title: "Close",
          text: "Outstanding works are tracked through completion and the project is prepared for handover."
        }
      ]}
      secondaryImage="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1500&q=85"
      closingTitle={
        <>
          NEED MORE CONTROL
          <br />
          <span>ON SITE?</span>
        </>
      }
      closingText="Tell us about your project, its current stage and where you need additional coordination or oversight."
    />
  );
}
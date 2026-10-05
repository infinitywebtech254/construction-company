import React from "react";
import ServiceDetailPage from "../../components/ServiceDetailPage";

export default function FitOut() {
  return (
    <ServiceDetailPage
      number="04"
      eyebrow="COMMERCIAL FIT-OUT"
      title="BUILT FOR"
      accent="BUSINESS."
      intro="Commercial spaces planned and delivered around how your team works, how customers move and how your business presents itself."
      heroImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85"
      overview="A commercial interior needs to do several jobs at once. It should support operations, make good use of available space, represent the business appropriately and remain practical for everyday use."
      capabilities={[
        "Office fit-outs",
        "Retail interiors",
        "Partitions and ceilings",
        "Custom joinery",
        "Lighting and finishes",
        "Workspace improvements"
      ]}
      process={[
        {
          title: "Brief",
          text: "We establish your operational requirements, team needs, brand direction and available space."
        },
        {
          title: "Plan",
          text: "The layout and fit-out scope are organised around circulation, functionality and use."
        },
        {
          title: "Coordinate",
          text: "Materials, trades and site requirements are prepared for implementation."
        },
        {
          title: "Fit-Out",
          text: "The commercial environment is constructed and finished according to the agreed direction."
        },
        {
          title: "Move In",
          text: "Final checks are completed so the space is ready for your team, customers or tenants."
        }
      ]}
      secondaryImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85"
      closingTitle={
        <>
          YOUR NEXT
          <br />
          <span>WORKSPACE?</span>
        </>
      }
      closingText="Tell us about the business, the space and what needs to happen there. We'll help turn the empty shell or existing office into a functional environment."
    />
  );
}
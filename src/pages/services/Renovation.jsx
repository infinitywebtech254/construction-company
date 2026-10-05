import React from "react";
import ServiceDetailPage from "../../components/ServiceDetailPage";

export default function Renovation() {
  return (
    <ServiceDetailPage
      number="02"
      eyebrow="RENOVATION"
      title="REWORK."
      accent="RENEW."
      intro="We transform existing residential and commercial spaces through considered alterations, upgrades and finishes."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=85"
      overview="A good renovation should solve more than an appearance problem. We look at how the existing property works, what should remain, what needs to change and where improvements will make the greatest difference."
      capabilities={[
        "Full home renovations",
        "Commercial renovations",
        "Kitchen upgrades",
        "Bathroom renovations",
        "Structural alterations",
        "Interior finishing"
      ]}
      process={[
        {
          title: "Assess",
          text: "We review the existing property and understand what is working, what isn't and what you want to change."
        },
        {
          title: "Define",
          text: "The renovation scope is established around the priorities of the property and client."
        },
        {
          title: "Prepare",
          text: "Materials, sequencing and site requirements are organised before work begins."
        },
        {
          title: "Transform",
          text: "Alterations, upgrades and finishing works are coordinated through the renovation."
        },
        {
          title: "Complete",
          text: "Final details are inspected and resolved before the renovated space is handed back."
        }
      ]}
      secondaryImage="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=85"
      closingTitle={
        <>
          READY TO RETHINK
          <br />
          <span>YOUR SPACE?</span>
        </>
      }
      closingText="Show us the existing property and tell us what you'd like to change. We'll help you establish the right renovation direction."
    />
  );
}
import React from "react";
import ServiceDetailPage from "../../components/ServiceDetailPage";

export default function Interiors() {
  return (
    <ServiceDetailPage
      number="03"
      eyebrow="INTERIORS"
      title="SPACES THAT"
      accent="FEEL RIGHT."
      intro="Interior spaces shaped around function, material, light and the way people actually live and work."
      heroImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
      overview="Interior design is where function and atmosphere meet. We consider circulation, proportions, finishes, lighting, furniture and material relationships to create spaces that feel resolved rather than simply decorated."
      capabilities={[
        "Interior concepts",
        "Space planning",
        "Material selection",
        "Colour and finish direction",
        "Lighting coordination",
        "Furniture and detailing"
      ]}
      process={[
        {
          title: "Understand",
          text: "We learn how you use the space, what you like and what the interior needs to achieve."
        },
        {
          title: "Concept",
          text: "A clear visual and spatial direction is developed for the project."
        },
        {
          title: "Select",
          text: "Materials, finishes, lighting and key interior elements are coordinated."
        },
        {
          title: "Execute",
          text: "The design is translated into the physical space with attention to the intended details."
        },
        {
          title: "Style",
          text: "Final elements are brought together to complete the interior experience."
        }
      ]}
      secondaryImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=85"
      closingTitle={
        <>
          HAVE A SPACE
          <br />
          <span>IN MIND?</span>
        </>
      }
      closingText="Whether you're starting with an empty room or an existing interior, tell us how you want the space to look, feel and function."
    />
  );
}
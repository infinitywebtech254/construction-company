import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "254722345875";

  const message =
    "Hello Apex Formworks, I'm interested in your construction and interior services. I'd like to discuss a project.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Apex Formworks on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />

      <span>CHAT WITH US</span>
    </a>
  );
}
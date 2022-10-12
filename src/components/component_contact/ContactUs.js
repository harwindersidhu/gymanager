import React from "react";
import "./ContactUs.scss";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

export default function ContactUs() {
  return (
    <div className="contact-main">
      <ContactForm />
      <ContactMap />
    </div>
  );
}
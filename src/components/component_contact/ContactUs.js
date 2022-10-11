import React from "react";
import "./ContactUs.scss";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div className="contact-main">
      <ContactForm />
      <div className="map-div">I am a map div</div>
    </div>
  );
}
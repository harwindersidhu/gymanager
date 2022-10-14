import React, { useContext } from "react";
import "./ContactUs.scss";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { loginContext } from "../../providers/LoginProvider";
import { Navigate } from "react-router-dom";

export default function ContactUs() {
  const { user } = useContext(loginContext);

  if (user.email === "") {
    return <Navigate to="/login" />
  }

  return (
    <div className="contact-main">
      <ContactForm />
      <ContactMap />
    </div>
  );
}
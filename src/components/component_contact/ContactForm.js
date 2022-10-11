import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  function onSubmit() {
    if (email === "" || message === "" || name === "") {
      setError("Fields can't be empty.");
      return;
    }
    const emailParams = {
      name,
      email,
      message
    };

    emailjs.send('service_15zq2s9', 'template_8gsv9ck', emailParams, 'mggdG_ysythJNqVbw')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResponseMessage("Thanks for contacting us. We will be back to you soon.");
      }, (err) => {
        console.log('FAILED...', err);
        setResponseMessage("Unable to send message. Try again later!");
      });
    console.log("Email send: ", email, message, name);
    setEmail("");
    setName("");
    setMessage("");
    setError("");
  }

  return (
    <div className="contact-form-main-div">
      <div className="contact-inner-form-div">
        <h2>Write us a message</h2>
        {error !== "" && <div className="contact-form-error">{error}</div>}
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <div className="contact-form-group">
            <label className="name-label">Name: </label>
            <input
              name="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="contact-form-group">
            <label className="email-label">Email: </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="contact-form-group">
            <label className="message-label">Message: </label>
            <textarea
              name="text"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

        </form>

        <button
          className="contact-form-button"
          onClick={onSubmit}
        >Submit</button>
      </div>
      {responseMessage !== "" && <label className="success-label">{responseMessage}</label>}
    </div>
  );
}



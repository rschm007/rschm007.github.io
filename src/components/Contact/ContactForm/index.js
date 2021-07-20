import React from "react";
import emailjs from "emailjs-com";

import CTAbutton from "../../CTAbutton";

// contact form send using emailJS
const ContactForm = () => {
  // if using this component in a different project, be sure to replace ID's
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_od6me7v",
        "template_f2u2wb2",
        e.target,
        "user_eYHjyB5qJUnnw935hh5vz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form id="contact-form" onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input type="text" name="user_name" />
      </div>
      <div>
        <label htmlFor="exampleInputEmail1">
          Email address
        </label>
        <input
          type="email"
          name="user_email"
          aria-describedby="emailHelp"
        />
      </div>
      <div>
        <label htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
        ></textarea>
      </div>
      <CTAbutton
        text="Submit"
        type="submit"
        value="Send"
      />
    </form>
  );
};

export default ContactForm;

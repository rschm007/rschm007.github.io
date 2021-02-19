import React from "react";
import emailjs from "emailjs-com";

import CTAbutton from "../CTAbutton";

const styles = {
  formGroup: "form-group flex flex-wrap -mx-3 mb-6",
  label:
    "block uppercase tracking-wide text-gray-100 text-lg font-bold my-2 mr-2",
  inputField:
    "form-control appearance-none block w-full bg-gray-300 text-black border border-gray-500 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200",
};

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
    <form id="contact-form" onSubmit={sendEmail} className="w-full max-w-lg">
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input type="text" name="user_name" className={styles.inputField} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="exampleInputEmail1">
          Email address
        </label>
        <input
          type="email"
          name="user_email"
          className={styles.inputField}
          aria-describedby="emailHelp"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          className={styles.inputField}
          rows="5"
        ></textarea>
      </div>
      <CTAbutton
        text="Submit"
        styles="mt-1 mb-7 ml-5 text-center bg-pink-500 py-4 px-8 text-2xl text-white uppercase font-bold border-2 border-transparent hover:bg-transparent hover:border-pink-700 transition duration-200 ease-in-out transform hover:-translate-y-1"
        type="submit"
        value="Send"
      />
    </form>
  );
};

export default ContactForm;

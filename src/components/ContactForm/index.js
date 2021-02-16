import CTAbutton from "../CTAbutton";

const styles = {
    formGroup: "form-group flex flex-wrap -mx-3 mb-6",
    label: "block uppercase tracking-wide text-gray-100 text-lg font-bold my-2 mr-2",
    inputField: "form-control appearance-none block w-full bg-gray-300 text-gray-100 border border-gray-500 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200",
}

const ContactForm = () => {
  return (
    <form
      id="contact-form"
    //   onSubmit={this.handleSubmit.bind(this)}
      method="POST"
      className="w-full max-w-lg"
    >
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label} >Name</label>
        <input type="text" className={styles.inputField} type="text" />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className={styles.inputField}
          aria-describedby="emailHelp"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea className={styles.inputField} rows="5"></textarea>
      </div>
      <CTAbutton
            href="#"
            text="Submit"
            styles="mt-1 mb-7 ml-5 text-center bg-pink-500 py-4 px-8 text-2xl text-white uppercase font-bold border-2 border-transparent hover:bg-transparent hover:border-pink-700 transition duration-200 ease-in-out transform hover:-translate-y-1"
          />
    </form>
  );
};

export default ContactForm;

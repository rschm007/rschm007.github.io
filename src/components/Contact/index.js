import CTAbutton from "../CTAbutton";
import LineBreak from "../LineBreak";

const styles = {
    title: "title justify-center",
  };

const Contact = (props) => {
  return (
    <div className="contact flex w-full h-full pt-20 -mt-28 pb-28 mb-28 px-80 justify-center">
                <div className={styles.title}>
          <h2 className={styles.h2}>My name is Robert</h2>
          <LineBreak />
        </div>
    </div>
  );
};

export default Contact;

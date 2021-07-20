const CTAbutton = (props) => {
  return (
    <a href={props.href}>
      <button>{props.text}</button>
    </a>
  );
};

export default CTAbutton;

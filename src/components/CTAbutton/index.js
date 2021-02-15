const CTAbutton = (props) => {
  return (
    <a href={props.href}>
      <button className={props.styles}>{props.text}</button>
    </a>
  );
};

export default CTAbutton;

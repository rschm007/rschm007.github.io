const Nav = (props) => {
  return (
    <nav className="wrapper sticky bg-gray-900 top-0 h-0 z-50">
      <div className="flex flex-between">
        <p className="brand text-white text-left text-2xl p-5 lowercase">
          Robert<strong>Schmahl</strong>
        </p>
        <a className="menuButton" onClick={props.toggleMenu}>
          <span />
        </a>
      </div>
      <div className="menuWrapper invisible">
        <div className="Menu">
          <a href="#welcome">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

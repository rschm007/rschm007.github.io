const Nav = () => {
  return (
    <nav className="sticky bg-gray-900 top-0 h-0 flex flex-between z-30">
      <div className="wrapper">
          <p className="brand text-white text-left text-2xl p-5 lowercase">
            Robert<strong>Schmahl</strong>
          </p>
      </div>
      <a className="menuButton" href="#">
        <span></span>
      </a>
    </nav>
  );
};

export default Nav;

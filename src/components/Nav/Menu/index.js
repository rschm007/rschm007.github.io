const Menu = ({ open, setOpen }) => {
  return (
    <div
      className={`text-white -mt-16 mb-0 h-screen text-5xl font-bold flex items-center justify-center ${open}`}
    >
      <ul>
        <a href="#welcome" >
          <li className="py-3 transition duration-200 ease-in-out transform hover:-translate-y-1" onClick={() => setOpen(!open)} >HOME</li>
        </a>
        <a href="#about" >
          <li className="py-3 transition duration-200 ease-in-out transform hover:-translate-y-1" onClick={() => setOpen(!open)} >ABOUT</li>
        </a>
        <a href="#projects" >
          <li className="py-3 transition duration-200 ease-in-out transform hover:-translate-y-1" onClick={() => setOpen(!open)} >PROJECTS</li>
        </a>
        <a href="#contact" >
          <li className="py-3 transition duration-200 ease-in-out transform hover:-translate-y-1" onClick={() => setOpen(!open)} >CONTACT</li>
        </a>
      </ul>
    </div>
  );
};

export default Menu;

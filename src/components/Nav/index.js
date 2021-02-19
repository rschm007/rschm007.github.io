import React, { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

const Nav = (props) => {
  // set state
  const [open, setOpen] = useState(false);

  return (
    <nav className="wrapper sticky bg-gray-900 top-0 h-0 z-50">
      <div className="flex">
        <p className="brand text-white text-left text-2xl p-5 lowercase transition duration-200 ease-in-out transform hover:-translate-y-1">
          <a href="#welcome">
            Robert<strong>Schmahl</strong>
          </a>
        </p>
      </div>
      <div className="flex">
        <Burger className="menuButton" open={open} setOpen={setOpen} />
        <Menu className="menuButton" open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Nav;

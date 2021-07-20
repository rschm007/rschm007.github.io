import React, { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

const Nav = (props) => {
  // set state
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div>
        <p className="brand">
          <a href="#welcome">
            Robert<strong>Schmahl</strong>
          </a>
        </p>
      </div>
      <div>
        <Burger className="menuButton" open={open} setOpen={setOpen} />
        <Menu className="menuButton" open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Nav;

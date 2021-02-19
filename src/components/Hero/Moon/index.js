import React from "react";
import { ReactComponent as MoonFullSVG } from "../../../assets/imgs/moon-svg/moon-full.svg";

const Moon = () => {
  return (
      <div className="moon absolute mt-20 w-60 h-60 z-30">
        <MoonFullSVG />
      </div>
  );
};

export default Moon;

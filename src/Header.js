import React from "react";
import "./styles1.css";
import write from "./icons8-writing-50.png";
function Header() {
  return (
    <div className="header h1">
      <h1>
        Notes <img width="40" height="35" src={write} />
      </h1>
    </div>
  );
}
export default Header;

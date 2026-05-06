import { useState } from "react";
import { NavBar } from "./NavBar";
export const Header = () => {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <div className="header">
      <img src="/images/logo-51.png" />
      <NavBar isOpen={isOpen}/>
      <button className="btn">Get Started</button>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "x" : "☰"}</div>
    </div>
  );
};

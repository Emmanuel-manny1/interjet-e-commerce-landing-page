import { useState } from "react";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <div className="header">
      <img src="/images/logo-51.png" />
      <NavBar isOpen={isOpen}/>
      <Link to="/auth"><button className="btn">Get Started</button></Link> 
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "x" : "☰"}</div>
    </div>
  );
};

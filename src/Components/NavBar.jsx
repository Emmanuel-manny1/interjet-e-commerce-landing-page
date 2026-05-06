// import { useState } from "react";
export const NavBar = ({isOpen}) => {
  return (
    <nav className={isOpen ? "nav active" : "nav"}>
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">About</a>
    </nav>
  );
};

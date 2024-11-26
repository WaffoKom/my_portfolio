import React from "react";

export function NavBar() {
  return (
    <header>
      <nav>
        <div className="logo_danilo"></div>
        <ul className="navbar_links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a href="#projets&cv">Projets & CV</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

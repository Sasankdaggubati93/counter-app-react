import React from "react";

const NavBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalCount}</span>
      </span>
    </nav>
  );
};

export default NavBar;

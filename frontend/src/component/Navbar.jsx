import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="Navbar">
      <Link className="navbar-brand d-flex align-items-center" to="/" style={{ paddingLeft: "10px" }}>
        <i className="bi bi-book-half" style={{ fontSize: "1.5rem", marginRight: "8px" }}></i>
        📚 Netaji Library
      </Link>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-book">Add Book</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/add-entity">Add Entity</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/add-members">Add Members</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/book-borrow">Book Borrow</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/search">Search</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/external">External API</Link>
        </li>
        {/*
            <li className="nav-item">
              <Link className="nav-link" to="/book-log">Book Log</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shelf-guide">Shelf Guide</Link>
            </li> */}
      </ul>

    </nav>
  );
}
export default Navbar;
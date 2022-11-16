import React from "react";
import { Link } from "react-router-dom";

import "../../Assets/CSS/navBar.css";
function NavBar() {
  return (
    <section className="side-nav">
      <div className="profile-container">
        User
        <p>user@gmail.com</p>
      </div>
      <div className="nav-links">
        <div className="link">
          <div className="iState">
            <Link to="/user-portal/">Dashboard</Link>
          </div>
        </div>

        <div className="link">
          <div className="iState">
            <Link to="/user-portal/book-list">Book List</Link>
          </div>
        </div>
        <div className="link fix">
          <div className="iState">
            <Link to="/">Logout</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;

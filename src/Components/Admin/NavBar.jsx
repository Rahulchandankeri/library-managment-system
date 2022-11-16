import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../Assets/CSS/navBar.css";
function NavBar() {
  const navigate = useNavigate();
  return (
    <section className="side-nav">
      <div className="profile-container">
        Admin
        <p>admin@gmail.com</p>
      </div>
      <div className="nav-links">
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/">Dashboard</Link>
          </div>
        </div>
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/add-user">Add User</Link>
          </div>
        </div>
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/add-books">Add Books</Link>
          </div>
        </div>
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/book-list">Book List</Link>
          </div>
        </div>
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/user-list">User List</Link>
          </div>
        </div>
        <div className="link fix">
          <div className="iState">
            <p onClick={() => navigate("/")}>Logout</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;

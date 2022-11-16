import React from "react";
import "../Assets/CSS/Home.css";
import { Link } from "react-router-dom";
import userAvatar from "../Assets/Images/user-avatar.png";

function Home() {
  return (
    <section className="home-container">
      <div className="cover">
        <img
          src="https://img.freepik.com/free-vector/tiny-student-sitting-book-pile-reading-flat-illustration_74855-15547.jpg?w=1060&t=st=1668172058~exp=1668172658~hmac=615ba32c932a3ef8b8bc3175b04390a4b1ae53353168964f988bbc5229c147a7"
          alt=""
        />
      </div>
      <div className="wrapper">
        <div style={{ fontFamily: "'Lexend', sans-serif" }}>Library Managment System</div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
          <div className="profile">
            <div style={{ height: "2.5rem", width: "2.5rem", marginBottom: "1.5rem" }}>
              <img
                src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
                alt="user"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div>
              <Link to="/admin-login" className="btn admin">
                Admin
              </Link>
            </div>
          </div>

          <div className="profile">
            <div style={{ height: "2.5rem", width: "2.5rem", marginBottom: "1.5rem" }}>
              <img
                src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-green-icon-symbol-transparent-png-11639594320ayr6vyoidq.png"
                alt="user"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div>
              <Link to="/user-login" className="btn user">
                User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

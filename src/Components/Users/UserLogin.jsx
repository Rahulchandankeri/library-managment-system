import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Assets/CSS/form.css";
function UserLogin() {
  const [fullName, setfullName] = useState("");
  const [Contactno, setContactno] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        fullName,
        password,
        Contactno,
        // language,
      };
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = await fetch("http://localhost:3001/users");
      const res = await url.json();

      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setfullName("").setContactno("").setRating(0).setLanguage("");
  };
  return (
    <section className="form-wrapper">
      <div className="img-container"></div>
      <form className="fav-form" onSubmit={(e) => handleForm(e)}>
        <h2>Login!</h2>

        <div className="input-block">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            value={email}
            // required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            // required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          className="input-block"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            borderBottom: "none",
          }}
        >
          {/* <button type="submit" className="cta add-favs">
            LOGIN
          </button> */}
          <Link to={"/user-portal"} className="cta add-favs">
            LOGIN
          </Link>
        </div>
      </form>
    </section>
  );
}

export default UserLogin;

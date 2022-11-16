import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Assets/CSS/form.css";
function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(0);
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        rating,
        password,
        // language,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = await fetch("http://localhost:3001/database", options);
      console.log(url);
      alert(`Your data has been submitted`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setEmail("").setPassword("").setRating(0).setLanguage("");
  };
  return (
    <section className="form-wrapper">
      <div className="img-container"></div>
      <form className="fav-form" onSubmit={handleForm}>
        <h2>Sign up!</h2>
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
          <Link to={"/admin-dashboard"} className="cta add-favs">
            lOGIN
          </Link>
        </div>
      </form>
    </section>
  );
}

export default AdminLogin;

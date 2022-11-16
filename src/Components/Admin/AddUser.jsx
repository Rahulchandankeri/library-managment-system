import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Assets/CSS/form.css";
function AddUser() {
  const [name, setname] = useState("");
  const [emailID, setemailID] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email: emailID,
        contact,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = await fetch("http://localhost:3001/users", options);
      console.log(url);
      alert(`Account created!`);
      navigate("/admin-dashboard/user-list");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setname("").setemailID("").setRating(0).setLanguage("");
  };
  return (
    <section className="form-wrapper">
      <div className="img-container"></div>
      <form className="fav-form" onSubmit={(e) => handleForm(e)}>
        <h2>Add User!</h2>
        <div className="input-block">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="emailID">Email id: </label>
          <input
            type="text"
            name="emailID"
            id="emailID"
            placeholder="Enter email "
            value={emailID}
            required
            onChange={(e) => setemailID(e.target.value)}
          />
        </div>{" "}
        <div className="input-block">
          <label htmlFor="contact">Contact no: </label>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Enter contact number "
            value={contact}
            // required
            onChange={(e) => setContact(e.target.value)}
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
          <button type="submit" className="cta add-favs">
            ADD USER
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddUser;

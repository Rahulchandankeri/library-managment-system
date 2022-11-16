import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import SideNav from "./NavBar";
import AddUser from "./AddUser";
import AddBooks from "./AddBooks";
import BookList from "./BookList";
import UserList from "./UserList";
import Card from "./Card";
import UserLogin from "../Users/UserLogin";
function AdminPortal() {
  return (
    <section style={{ display: "flex" }}>
      <SideNav />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route
          path="/add-user"
          element={
            <div style={{ position: "absolute", left: "15%", width: "80%", display: "flex", justifyContent: "center" }}>
              <AddUser />
            </div>
          }
        />
        <Route
          path="/add-books"
          element={
            <div style={{ position: "absolute", left: "15%", width: "80%" }}>
              <AddBooks />
            </div>
          }
        />
        <Route path="/book-list" element={<BookList />} />
        <Route
          path="/user-list"
          element={
            <React.Fragment>
              <UserList />
            </React.Fragment>
          }
        />
      </Routes>
    </section>
  );
}

export default AdminPortal;

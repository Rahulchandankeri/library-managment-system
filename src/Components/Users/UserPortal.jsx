import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./NavBarUser";
import BookList from "../Admin/BookList";
import Card from "../Admin/Card";
function UserPortal() {
  return (
    <section style={{ display: "flex" }}>
      <SideNav />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/book-list" element={<BookList />} />
      </Routes>
    </section>
  );
}

export default UserPortal;

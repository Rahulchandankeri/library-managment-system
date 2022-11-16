import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../Assets/CSS/bookList.css";
import "../../Assets/CSS/loader.css";
function BookList(props) {
  let upBook = "";
  const [bookData, setBookData] = useState([]);
  const [deleted, setdeleted] = useState(true);
  const [loading, updateLoading] = useState(true);
  const path = useLocation();
  useEffect(() => {
    try {
      const fetchBooks = async () => {
        const url = await fetch("http://localhost:3001/books");
        const res = await url.json();
        setBookData(res);
        updateLoading(false);
      };
      fetchBooks();
    } catch (error) {
      console.log(error.message);
    }
  }, [deleted]);
  // setBookData(bookData.filter((book) => book.id !== id));
  const deleteHandler = (id) => {
    setdeleted(false);
    try {
      const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      const resp = window.confirm("Delete permanently?");
      if (resp === false) return;
      const deleteBook = async () => {
        const url = await fetch(`http://localhost:3001/books/${id}`, options);
        setBookData(bookData);
      };
      deleteBook();
      updateLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleHide = (id) => {
    setBookData(bookData.filter((book) => book.id !== id));
    // localStorage.setItem("books", JSON.stringify(bookData));
    // console.log(bookData);
  };
  // let myBooks = localStorage.getItem("books") ? (upBook = JSON.parse(localStorage.getItem("books"))) : (upBook = bookData);
  // console.log(upBook);
  return (
    <React.Fragment>
      <div style={{ position: "absolute", left: "20%" }}>
        {loading && <div className="loader">Loading...</div>}
        <h4>Books Available: {bookData.length}</h4>
        <div className="book-wrapper">
          {bookData.map((books) => {
            return (
              <div className="book-card" key={books.id}>
                <div id="bookID">{books.id}</div>
                <div className="content">
                  <h3>Title: {books.title}</h3>
                  <p>Author: {books.author}</p>
                  <p>Edition: {books.edition}</p>
                </div>

                {path.pathname === "/user-portal/book-list" ? (
                  <button className="deleteBtn" onClick={() => handleHide(books.id)}>
                    Dont like
                  </button>
                ) : (
                  <button className="deleteBtn" onClick={() => deleteHandler(books.id)}>
                    Delete
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default BookList;

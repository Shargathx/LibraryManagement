import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await fetch(
          `${process.env.REACT_APP_API_URL}?page=${page}&size=4&sort=createdAt,desc`
        );
        const fetchData = await data.json();
        console.log(data);
        console.log(fetchData);
        setBooks(fetchData.content);
        setTotalPages(fetchData.totalPages);
      } catch (e) {
        console.error("Unable to fetch", e);
      }
    }
    fetchBooks();
  }, [page]);

  return (
    <div
      className="container mt-4"
      style={{
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2
        className="text-center mb-4"
        style={{ color: "#000", textShadow: "1px 1px 2px #f5f5f5ff" }}
      >
        Latest Books
      </h2>

      {books.length === 0 ? (
        <p className="text-center" style={{ color: "#555" }}>
          No books available.
        </p>
      ) : (
        <>
          {/* 📚 BOOK LIST */}
          <div
            key={page}
            className="d-flex gap-3 overflow-auto"
            style={{
              width: "100%",
              paddingBottom: "10px",
              scrollSnapType: "x mandatory",
            }}
          >
            {books.map((book) => (
              <Link
                to={`/books/${book.id}`}
                key={book.id}
                style={{
                  textDecoration: "none",
                  flex: "0 0 20%",
                  scrollSnapAlign: "start",
                }}
              >
                <div
                  className="book-card p-2 shadow-sm"
                  style={{ minWidth: "200px", height: "400px" }}
                >
                  {/* Book Image */}
                  {book.image ? (
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}${book.image}`}
                      alt={book.title}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "250px",
                        backgroundColor: "#eee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                        color: "#888",
                      }}
                    >
                      No Image
                    </div>
                  )}

                  {/* Title */}
                  <h5 style={{ color: "#333", minHeight: "2.5rem" }}>
                    {book.title}
                  </h5>

                  {/* Description */}
                  <p
                    style={{
                      color: "#555",
                      fontSize: "0.85rem",
                      minHeight: "3rem",
                    }}
                  >
                    {book.description || "No description available"}
                  </p>

                  {/* Shelf */}
                  <p
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Shelf: {book.shelf || "N/A"}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              onClick={() => setPage(prev => prev - 1)}
              disabled={page === 0}
              style={{ marginRight: "10px" }}
            >
              Prev
            </button>

            <span>
              Page {page + 1} / {totalPages || 1}
            </span>

            <button
              onClick={() => setPage(prev => prev + 1)}
              disabled={page + 1 >= totalPages}
              style={{ marginLeft: "10px" }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
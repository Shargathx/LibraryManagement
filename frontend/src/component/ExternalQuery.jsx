import React, { useEffect, useState } from "react";

function ExternalBooksPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchBooks() {
            try {
                setLoading(true);

                // const res = await fetch("${process.env.REACT_APP_BASE_URL} + /bibles");
                const res = await fetch(`${process.env.REACT_APP_API_URL}/bibles`);
                const data = await res.json();
                console.log("API RESPONSE:", data);

                setBooks(data);
            } catch (err) {
                console.error("Error fetching books", err);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            {/* 📚 Grid */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                        gap: "15px",
                    }}
                >
                    {books.map((book) => (
                        <div
                            key={book.bible_id}
                            style={{
                                border: "1px solid #ddd",
                                padding: "10px",
                                borderRadius: "8px",
                            }}
                        >
                            <h4 style={{ fontSize: "14px" }}>
                                Language: {book.language}
                            </h4>

                            <p style={{ fontSize: "12px", color: "#666" }}>
                                Version: {book.version ?? "N/A"}
                            </p>

                            <p style={{ fontWeight: "bold" }}>
                                ID: {book.bible_id}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExternalBooksPage;
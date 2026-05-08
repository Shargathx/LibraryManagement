import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import AddBook from "./component/AddBook";
import AddEntitiesPage from "./component/AddEntitiesPage";
import BookDetailPage from "./component/BookDetailsPage";
import AddMemberPage from "./component/AddMemberPage";
import BorrowBook from "./component/BorrowBook";
import SearchBook from "./component/SearchBook";
import ExternalQuery from "./component/ExternalQuery";

function App() {
  return (
   
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-entity" element={<AddEntitiesPage/>} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/add-members" element={<AddMemberPage/>}/>
        <Route path="/book-borrow" element={<BorrowBook/>}/>
        <Route path="/search" element={<SearchBook />} />
        <Route path="/external" element={<ExternalQuery />} />
      </Routes>
    </Router>

  );
}

export default App;
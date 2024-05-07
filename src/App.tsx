import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home  from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import CreatePost from "./pages/create-post/create-post";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

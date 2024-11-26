import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../src/Layout/Layout";
// import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favourites";
import Courses from "./pages/Courses";
import Community from "./pages/Community";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Example user details
  const user = {
    name: "Kristin Watson",
    photo: "https://img.freepik.com/free-photo/pleased-european-young-woman-with-cheerful-expression-keeps-both-hands-near-face-being-touched-by-compliment_273609-18239.jpg",
    role: "Chef de Partie",
  };

  return (
    <Router>
      <Layout user={user} setSearchQuery={setSearchQuery}>
        <Routes>
          {/* <Route path="/" element={<Home searchQuery={searchQuery} />} /> */}
          <Route path="/" element={<Recipes searchQuery={searchQuery} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

import React from "react";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import Mobile from "./sections/Mobile";
import Footer from "./sections/Footer";
import "./scss/index.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Mobile />
      <Footer />
    </div>
  );
}

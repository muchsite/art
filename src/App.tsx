import React from "react";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import About from "./pages/about/about";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acc from "./pages/acc/Acc";
import List from "./pages/list/List";
import Normal from "./pages/normal/Normal";
import Support from "./pages/support/Support";
import Tags from "./pages/tags/Tags";
import TagsH from "./pages/tagsh/TagsH";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div style={{ paddingTop: "4rem" }}></div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Normal />} path="/normal" />
          <Route element={<About />} path="/about" />
          <Route element={<Acc />} path="/account" />
          <Route element={<List />} path="/list" />
          <Route element={<Support />} path="/support" />
          <Route element={<Tags />} path="/tags" />
          <Route element={<TagsH />} path="/tagshelp" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

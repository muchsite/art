import React from "react";

import "./App.scss";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import About from "./pages/about/about";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acc from "./pages/acc/Acc";
import Posts from "./pages/posts/Posts";
import Normal from "./pages/normal/Normal";
import Support from "./pages/support/Support";
import Tags from "./pages/tags/Tags";
import TagsH from "./pages/tagsh/TagsH";
import Creator from "./pages/normal/Creator";
import Series from "./pages/normal/Series";
import LogIn from "./pages/acc/LogIn";
import { UserProvider } from "./Context";
import UserNc from "./pages/user/UserNc";
import CreatorUser from "./pages/creator/CreatorUser";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <HashRouter>
          <Nav />
          <div style={{ paddingTop: "4rem" }}></div>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Normal />} path="/posts/normal" />
            <Route element={<Creator />} path="/posts/creator" />
            <Route element={<Series />} path="/posts/series" />
            <Route element={<About />} path="/about" />
            <Route element={<Acc />} path="/account" />
            <Route element={<LogIn />} path="/login" />
            <Route element={<Posts />} path="/posts" />
            <Route element={<Support />} path="/support" />
            <Route element={<Tags />} path="/tags" />
            <Route element={<TagsH />} path="/tagshelp" />
            <Route element={<UserNc />} path="/user" />
            <Route element={<CreatorUser />} path="/creator" />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </UserProvider>
  );
}

export default App;

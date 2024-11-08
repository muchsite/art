import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Normal from "./pages/normal/Normal";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normal" element={<Normal />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

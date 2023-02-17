import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchByAlbum from "./pages/SearchByAlbum";
import Search from "./pages/Search";
import RequireLogin from "./pages/RequireLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search-by-album" element={<SearchByAlbum />} />
        <Route path="/require-login" element={<RequireLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

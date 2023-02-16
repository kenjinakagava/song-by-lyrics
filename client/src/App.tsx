import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchByAlbum from "./pages/SearchByAlbum";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search-by-album" element={<SearchByAlbum />} />
      </Routes>
    </Router>
  );
}

export default App;

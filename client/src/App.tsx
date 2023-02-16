import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccessTokenProvider } from "./context/accessToken";
import SearchByAlbum from "./pages/SearchByAlbum";

const code = new URLSearchParams(window.location.search).get("code");

const safeCode = code ? code : "";

function App() {
  return (
    <AccessTokenProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home code={safeCode} />} />
          <Route path="/search-by-album" element={<SearchByAlbum />} />
        </Routes>
      </Router>
    </AccessTokenProvider>
  );
}

export default App;

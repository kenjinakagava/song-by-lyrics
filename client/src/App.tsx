import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import RequireLogin from "./pages/RequireLogin";
import ImportOrExport from "./pages/ImportOrExport";

function App() {
  // https://caniuse.com/indexeddb
  if (!("indexedDB" in window)) {
    return (
      <div>
        Please use to a modern browser (such as Google Chrome) to navigate this
        website
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/import-or-export" element={<ImportOrExport />} />
        <Route path="/require-login" element={<RequireLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

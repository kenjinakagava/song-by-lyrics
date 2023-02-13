import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return <>{code ? <Dashboard code={code} /> : <Home />}</>;
}

export default App;

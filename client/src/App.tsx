import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return <>{code ? <Dashboard code={code} /> : <Login />}</>;
}

export default App;

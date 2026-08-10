import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Problems from "./pages/Problems";
import CodingWorkspace from "./pages/CodingWorkspace";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching API:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <h1>CodeProof</h1>
      <p>{message}</p>

      <nav>
        <Link to="/login">Login</Link><br />
        <Link to="/register">Register</Link><br />
        <Link to="/dashboard">Dashboard</Link><br />
        <Link to="/problems">Problems</Link><br />
        <Link to="/workspace">CodingWorkspace</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/workspace" element={<CodingWorkspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
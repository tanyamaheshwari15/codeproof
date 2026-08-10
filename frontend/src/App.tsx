import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import CodingWorkspace from "./pages/CodingWorkspace";
import Problems from "./pages/Problems";
import Progress from "./pages/Progress";

function App() {

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching API:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="problems" element={<Problems />} />
          <Route path="workspace" element={<CodingWorkspace />} />
          <Route path="progress" element={<Progress />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
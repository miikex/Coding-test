import React from "react";
import Employees from "./pages/Employees";
import Bar from "./components/Bar";
import Companies from "./pages/Companies";
import AssignEmployee from "./pages/AssignEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Bar />
      <Routes>
        <Route exact path="/" element={<Employees />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/assignEmployees" element={<AssignEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;

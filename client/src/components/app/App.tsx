import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard/Dashboard";
import { AppBar } from "../appbar/AppBar";
import React from "react";

export function App() {
  return (
    <React.Fragment>
      <Router>
        <AppBar />
        <Routes>
          <Route path='' element={<Dashboard />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

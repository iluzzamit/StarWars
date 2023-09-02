import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Peoples } from "../../pages/peoples/Peoples";
import { Planets } from "../../pages/planets/Planets";
import { AppBar } from "../appbar/AppBar";
import React from "react";

export function App() {
  return (
    <React.Fragment>
      <Router>
        <AppBar />
        <Routes>
          <Route path='' element={<Navigate to='/people' />} />
          <Route path='/people' element={<Peoples />} />
          <Route path='/planet' element={<Planets />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

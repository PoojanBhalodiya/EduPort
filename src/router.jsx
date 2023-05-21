import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/default/home";
import NotFound from "./view/default/404";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

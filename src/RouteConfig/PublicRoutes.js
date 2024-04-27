import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "../pages/Signin";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Navigate to="/signin" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;

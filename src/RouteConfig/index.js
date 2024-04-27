import React from "react";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const RoutesConfig = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  return <div>{isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />}</div>;
};

export default RoutesConfig;

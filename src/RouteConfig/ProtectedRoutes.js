import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardHome from "../dashboard/Home";
import Sidebar from "../layouts/Sidebar";
import AllHotels from "../pages/AllHotels";
import AllEvents from "../pages/AllEvents";
import AllCars from "../pages/AllCars";
import AddCar from "../pages/AddCar";
import AddHotel from "../pages/AddHotel";
import AddEvent from "../pages/AddEvent";

const ProtectedRoutes = () => {
  let routes = [
    { path: "dashboard/Home", element: <DashboardHome /> },
    { path: "pages/allhotels", element: <AllHotels /> },
    { path: "pages/allEvents", element: <AllEvents /> },
    { path: "pages/allcars", element: <AllCars /> },
    { path: "pages/AddCar", element: <AddCar /> },
    { path: "pages/AddHotel", element: <AddHotel /> },
    { path: "pages/AddEvent", element: <AddEvent /> },
  ];
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        {routes?.map((data, index) => (
          <Route path={data?.path} element={data?.element} key={index} />
        ))}

        <Route
          path="*"
          element={<Navigate to="dashboard/Home" replace={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;

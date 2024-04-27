import React from "react";

// Dashboard
import DashboardHome from "../dashboard/Home";
import AllHotels from "../pages/AllHotels";
import AllCars from "../pages/AllCars";
import AddHotel from "../pages/AddHotel";
import AddCar from "../pages/AddCar";
import AllEvents from "../pages/AllEvents";
import AddEvent from "../pages/AddEvent";

const protectedRoutes = [
  { path: "dashboard/Home", element: <DashboardHome /> },
  { path: "pages/allhotels", element: <AllHotels /> },
  { path: "pages/allEvents", element: <AllEvents /> },
  { path: "pages/allcars", element: <AllCars /> },
  { path: "pages/AddCar", element: <AddCar /> },
  { path: "pages/AddHotel", element: <AddHotel /> },
  { path: "pages/AddEvent", element: <AddEvent /> },
];

export default protectedRoutes;

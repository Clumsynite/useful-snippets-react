import React from "react";

import Home from "../pages/Home";
import PasswordGenerator from "../pages/PasswordGenerator";
import Calendar from "../pages/Calendar";

const modules = [
  {
    label: "Home",
    path: "",
    name: "home",
    key: "main",
    element: <Home />,
  },
  {
    label: "Password Generator",
    path: "password-generator",
    name: "passsord-generator",
    key: "password-generator",
    element: <PasswordGenerator />,
  },
  {
    label: "Calendar",
    path: "calendar",
    name: "calendar",
    key: "calendar",
    element: <Calendar />,
  },
];

export const menuItems = modules.map((module) => ({ ...module, element: null }));

export default modules;

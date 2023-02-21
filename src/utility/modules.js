import React from "react";

import Home from "../pages/Home";
import PasswordGenerator from "../pages/PasswordGenerator";

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
    name: "passsword-generator",
    key: "password-generator",
    element: <PasswordGenerator />,
  },
];

export const menuItems = modules.map((module) => ({ ...module, element: null }));

export default modules;

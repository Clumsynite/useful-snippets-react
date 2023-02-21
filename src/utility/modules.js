import React from "react";

import Home from "../pages/Home";

const modules = [
  {
    label: "Home",
    path: "",
    name: "home",
    key: "main",
    element: <Home />,
  },
];

export const menuItems = modules.map((module) => ({ ...module, element: null }));

export default modules;

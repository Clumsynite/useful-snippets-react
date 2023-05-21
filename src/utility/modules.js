import React from "react";

import Home from "../pages/Home";
import PasswordGenerator from "../pages/PasswordGenerator";
import Calendar from "../pages/Calendar";
import BcryptEncryptor from "../pages/BcryptEncryptor";
import CardScroll from "../pages/CardScroll";
import Reveal from "../pages/Reveal";

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
    label: "Bcrypt Encryptor",
    path: "bcrypt",
    name: "bcrypt",
    key: "bcrypt",
    element: <BcryptEncryptor />,
  },
  {
    label: "Card Scroll",
    path: "card-scroll",
    name: "card-scroll",
    key: "card-scroll",
    element: <CardScroll />,
  },
  {
    label: "Calendar",
    path: "calendar",
    name: "calendar",
    key: "calendar",
    element: <Calendar />,
  },
  {
    label: "Reveal",
    path: "reveal",
    name: "reveal",
    key: "reveal",
    element: <Reveal />,
  },
];

export const menuItems = modules.map((module) => ({ ...module, element: null }));

export default modules;

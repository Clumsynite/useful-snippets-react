import React from "react";
import { Outlet } from "react-router-dom";

import "./styles/App.css";

import SideNav from "./components/SideNav";
import Container from "./components/Container";

const App = () => (
  <div id="App">
    <div id="layout">
      <SideNav />
      <Container>
        <Outlet />
      </Container>
    </div>
  </div>
);

export default App;

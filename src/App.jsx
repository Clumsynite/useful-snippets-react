import React, { useEffect } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import SideBar from "./components/SideBar";

import "antd/dist/reset.css";
import "./styles/App.css";

import Footer from "./components/Footer";

const { Content } = Layout;
const App = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("APP INTIALISED");
  }, []);

  return (
    <div id="App">
      <Layout hasSider>
        <SideBar />
        <Content
          style={{
            padding: 24,
            textAlign: "center",
            height: "calc(100vh - 50px)",
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default App;

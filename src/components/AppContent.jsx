import React from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AppContent = () => (
  <Layout>
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
  </Layout>
);

export default AppContent;

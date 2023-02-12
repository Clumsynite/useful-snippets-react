import React from "react";

import { Layout } from "antd";

const { Footer: AntdFooter } = Layout;

const Footer = () => (
  <AntdFooter
    style={{
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100vw",
      height: 48,
      paddingBottom: 40,
      zIndex: -1,
      overflow: "hidden",
    }}
  >
    Useful Snippets React ©2023 Created by Rishabh Pathak
  </AntdFooter>
);

export default Footer;

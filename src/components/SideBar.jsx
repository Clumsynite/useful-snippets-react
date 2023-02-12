import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { menuItems } from "../utility/modules";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();
  const nvigate = useNavigate();

  const path = location.pathname.toLowerCase().split("/");

  const selectedMenu = [path.join(""), path[path.length - 1], `${path[1]}main`];
  // console.log(selectedMenu);

  const routesToGoTo = menuItems.map((item) => item.name);

  const onMenuClick = (menu) => {
    if (routesToGoTo.includes(menu.key)) {
      nvigate(`/${menu.key}`);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          margin: 16,
          color: "#fff",
          fontSize: 24,
          fontWeight: 600,
        }}
        title={`Clusmyknight's React Snippets`}
      >
        {collapsed ? `R S` : `React Snippets`}
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={selectedMenu} onClick={onMenuClick} items={menuItems} />
    </Sider>
  );
};

export default SideBar;

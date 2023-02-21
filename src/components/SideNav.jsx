import React, { forwardRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SideNav.css";
import { menuItems } from "../utility/modules";
import MenuItem from "./MenuItem";

const SideNav = (props, ref) => {
  const [isCollapsed] = useState(false);

  const location = useLocation();
  const nvigate = useNavigate();

  const path = location.pathname.toLowerCase().split("/");

  const selectedMenu = [path.join(""), path[path.length - 1], `${path[1]}main`];

  const routesToGoTo = menuItems.map((item) => item.path);

  const onMenuClick = (item) => {
    if (routesToGoTo.includes(item.path)) {
      nvigate(`/${item.path}`);
    }
  };
  return (
    <div
      id="sidenav"
      className="sidenav-container"
      style={{ backgroundColor: "#000000", width: isCollapsed ? 80 : 200 }}
      ref={ref}
    >
      <div className="sidenav-heading">Useful snippets</div>
      <div className="sidenav-menu-items">
        {!!menuItems?.length &&
          menuItems.map((item) => (
            <MenuItem
              key={item.key}
              label={item.label}
              isSelected={selectedMenu.includes(item.key)}
              onClick={() => onMenuClick(item)}
            />
          ))}
      </div>
    </div>
  );
};

export default forwardRef(SideNav);

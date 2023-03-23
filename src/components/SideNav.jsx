import React, { forwardRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getIntials } from "../helper/string";
import "../styles/SideNav.css";
import { menuItems } from "../utility/modules";
import MenuItem from "./MenuItem";

const SideNav = (props, ref) => {
  const showCollapseIcon = false;
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const headingLabel = "Useful Snippets";

  return (
    <div
      id="sidenav"
      className="sidenav-container"
      style={{ backgroundColor: "#000000", width: isCollapsed ? 80 : 200 }}
      ref={ref}
    >
      <div className="flex-row">
        <div className="sidenav-heading">{isCollapsed ? getIntials(headingLabel) : headingLabel}</div>
        {showCollapseIcon && (
          <div
            className="collapse-icon"
            title={isCollapsed ? "Expand" : "Collapse"}
            role="button"
            onClick={toggleCollapse}
            onKeyDown={() => {}}
            tabIndex="0"
          >
            {isCollapsed ? ">" : "<"}
          </div>
        )}
      </div>
      <div className="sidenav-menu-items">
        {!!menuItems?.length &&
          menuItems.map((item) => (
            <MenuItem
              key={item.key}
              label={item.label}
              isSelected={selectedMenu.includes(item.key)}
              onClick={() => onMenuClick(item)}
              isCollapsed={isCollapsed}
            />
          ))}
      </div>
    </div>
  );
};

export default forwardRef(SideNav);

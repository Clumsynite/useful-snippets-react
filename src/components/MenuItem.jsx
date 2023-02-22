import { func, string, bool } from "prop-types";
import React from "react";
import { getIntials } from "../helper/string";

import "../styles/MenuItem.css";

export const MenuItemType = {
  label: string,
  onClick: func,
  isSelected: bool,
  isCollapsed: bool.isRequired,
};

const MenuItem = ({ label, onClick, isSelected, isCollapsed }) => (
  <div
    className={`menu-item ${isSelected ? "menu-item-active" : ""}`}
    onClick={onClick}
    onKeyDown={onClick}
    role="menuitem"
    tabIndex={0}
    title={label}
  >
    {isCollapsed ? getIntials(label) : label}
  </div>
);

MenuItem.propTypes = MenuItemType;
MenuItem.defaultProps = {
  label: "",
  isSelected: false,
  onClick: () => {},
};
export default MenuItem;

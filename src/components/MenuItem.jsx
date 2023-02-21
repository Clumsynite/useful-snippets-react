import { func, string, bool } from "prop-types";
import React from "react";

import "../styles/MenuItem.css";

export const MenuItemType = {
  label: string,
  onClick: func,
  isSelected: bool,
};

const MenuItem = ({ label, onClick, isSelected }) => (
  <div
    className={`menu-item ${isSelected ? "menu-item-active" : ""}`}
    onClick={onClick}
    onKeyDown={onClick}
    role="menuitem"
    tabIndex={0}
  >
    {label}
  </div>
);

MenuItem.propTypes = MenuItemType;
MenuItem.defaultProps = {
  label: "",
  isSelected: false,
  onClick: () => {},
};
export default MenuItem;

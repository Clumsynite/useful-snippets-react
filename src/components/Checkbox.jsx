import { bool, func, string } from "prop-types";
import React from "react";
import "../styles/Checkbox.css";

const Checkbox = ({ label, id, name, checked, onCheck, onChange }) => (
  <label className="checkbox-container" htmlFor={id}>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      name={name}
      onChange={(e) => {
        if (onChange) return onChange(e);
        if (onCheck) return onCheck(e);
        return null;
      }}
    />
    <span className="checkmark" />
    {label}
  </label>
);
Checkbox.propTypes = {
  label: string.isRequired,
  checked: bool.isRequired,
  onCheck: func,
  onChange: func,
  id: string.isRequired,
  name: string.isRequired,
};
Checkbox.defaultProps = {
  onCheck: () => {},
  onChange: () => {},
};
export default Checkbox;

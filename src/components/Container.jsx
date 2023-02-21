/* eslint-disable react/jsx-props-no-spreading */
import { node } from "prop-types";
import React from "react";
import "../styles/Container.css";

const Container = ({ children, ...props }) => (
  <div id="container" {...props}>
    {children}
  </div>
);

Container.propTypes = {
  children: node.isRequired,
};

export default Container;

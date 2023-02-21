/* eslint-disable react/forbid-prop-types */
import { func, number, object, string } from "prop-types";
import React, { useEffect } from "react";

const ErrorMessage = ({ error, setError, duration, style }) => {
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(""), duration);
    }
  }, [error]);

  return <div style={{ fontSize: 13, color: "red", fontWeight: 300, minHeight: 20, ...style }}>{error}</div>;
};
ErrorMessage.propTypes = {
  error: string.isRequired,
  setError: func.isRequired,
  duration: number,
  style: object,
};
ErrorMessage.defaultProps = {
  duration: 3000,
  style: {},
};

export default ErrorMessage;

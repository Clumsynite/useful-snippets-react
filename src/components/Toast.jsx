import React, { useEffect, useState } from "react";
import { func, number, string } from "prop-types";
import "../styles/Toast.css";

const Toast = ({ text, setText, duration }) => {
  const [localText, setLocalText] = useState(text);

  useEffect(() => {
    setLocalText(text);
    const timeout = setTimeout(() => {
      setLocalText("");
      setText("");
    }, duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return <div className={`toast-container ${!text ? "disappear" : "entry"}`}>{localText}</div>;
};
Toast.propTypes = {
  text: string.isRequired,
  duration: number,
  setText: func,
};
Toast.defaultProps = {
  duration: 5000,
  setText: () => {},
};

export default Toast;

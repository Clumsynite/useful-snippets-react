/* eslint-disable arrow-body-style */
import React from "react";

const useUnmount = (callback) => {
  const callbackRef = React.useRef(callback);

  callbackRef.current = callback;

  React.useEffect(() => {
    return () => {
      callbackRef.current();
    };
  }, []);
};
export default useUnmount;

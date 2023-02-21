/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
import React from "react";

const useUpdateEffect = (effectCallback, deps = []) => {
  const isFirstMount = React.useRef(false);

  React.useEffect(() => {
    return () => {
      isFirstMount.current = false;
    };
  }, []);

  React.useEffect(() => {
    // Do not execute effectcallback for the first time
    if (!isFirstMount.current) {
      isFirstMount.current = true;
    } else {
      return effectCallback();
    }
  }, deps);
};

export default useUpdateEffect;

import React from "react";

const useMount = (callback) => {
  React.useEffect(callback, []);
};

export default useMount;

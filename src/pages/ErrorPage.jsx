import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        title={error?.error?.message}
        style={{
          fontSize: 40,
        }}
      >
        {error.status}
        {" | "}
        {error.statusText}
      </div>
    </div>
  );
};

export default ErrorPage;

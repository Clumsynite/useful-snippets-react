import React from "react";
import { useRouteError } from "react-router-dom";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div id="error-page">
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

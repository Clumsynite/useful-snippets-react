import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";

import rawReadme from "../README.md";

const Home = () => {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    fetch(rawReadme)
      .then((response) => response.text())
      .then(setReadme);
  }, []);

  return (
    <div style={{ padding: "24px 24px 48px 24px" }}>
      <div className="markdown-body">
        <ReactMarkdown>{readme}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { generatePasswordWithOptions } from "../helper/passwordgenerator";
import useMount from "../hooks/useMount";

import "../styles/PasswordGenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const onPasswordgenerate = () => {
    const randomPassword = generatePasswordWithOptions();
    setPassword(randomPassword);
  };

  useMount(() => {
    onPasswordgenerate();
  });

  return (
    <div>
      <div className="title">Password genetator</div>
      <div className="generator-card">
        <div className="password-section">
          <div className="password-field">{password}</div>
          <div className="password-generator">
            <button onClick={onPasswordgenerate} type="button">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;

import React, { useState } from "react";
import bcrypt from "bcryptjs";

import ErrorMessage from "./ErrorMessage";
import Toast from "./Toast";

import "../styles/PasswordEncryptor.css";

const PasswordVerifier = () => {
  const [rawPassword, setRawPassword] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const [error, setError] = useState("");

  const [toast, setTToast] = useState("");

  const onRawPasswordChange = (e) => {
    const value = e?.target?.value;
    setRawPassword(value);
  };

  const onhashedPasswordChange = (e) => {
    const value = e?.target?.value;
    setHashedPassword(value);
  };

  const onPasswordVerify = async () => {
    try {
      const isValid = await bcrypt.compare(rawPassword, hashedPassword);
      const message = `Password ${isValid ? "matches" : "does not match"}`;
      return setTToast(message);
    } catch (err) {
      return setError(err?.message);
    }
  };

  return (
    <div>
      <div className="title">Bcrypt Hash Verifier</div>
      <div className="hash-container">
        <div className="hash-generator-card">
          <div className="password-section">
            <div className="flex-row password-length-section">
              <div>Raw Password</div>
              <input type="text" className="raw-password-input" value={rawPassword} onChange={onRawPasswordChange} />
            </div>
          </div>
          <div className="password-section">
            <div className="flex-row password-length-section">
              <div>Hashed Password</div>
              <textarea
                type="text"
                className="raw-password-input"
                value={hashedPassword}
                onChange={onhashedPasswordChange}
                rows="3"
              />
            </div>
          </div>

          <ErrorMessage error={error} setError={setError} />
          <div className="copy-hash-container">
            <button
              type="button"
              onClick={onPasswordVerify}
              className="copy-hash-button border_black"
              disabled={!rawPassword || !hashedPassword}
            >
              Verify Password
            </button>
          </div>
        </div>
      </div>
      <Toast text={toast} setText={setTToast} duration={3000} />
    </div>
  );
};

export default PasswordVerifier;

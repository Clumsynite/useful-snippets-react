import React, { useState } from "react";
import bcrypt from "bcryptjs";

import ErrorMessage from "./ErrorMessage";
import Toast from "./Toast";

import { ReactComponent as CopyIcon } from "../icons/copy.svg";
import { ReactComponent as ShowIcon } from "../icons/eye.svg";
import { ReactComponent as HideIcon } from "../icons/eye-off.svg";

import "../styles/PasswordEncryptor.css";

const PasswordEncryptor = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rawPassword, setRawPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [toast, setTToast] = useState("");

  const onRawPasswordChange = (e) => {
    const value = e?.target?.value;
    setRawPassword(value);
  };

  const toggleVisibility = () => setPasswordVisible(!passwordVisible);

  const onPasswordHash = async () => {
    try {
      const salt = await bcrypt.genSalt(10);
      const encPassword = await bcrypt.hash(rawPassword, salt);
      return setPassword(encPassword);
    } catch (err) {
      return setError(err?.message);
    }
  };

  const copyHash = () => {
    navigator.clipboard.writeText(password);
    setTToast("Password copied to clipboard!");
  };

  return (
    <div>
      <div className="title">Bcrypt Hash generator</div>
      <div className="hash-container">
        <div className="hash-generator-card">
          <div className="password-section">
            <div className="flex-row password-length-section">
              <div>Password</div>
              <input
                type={passwordVisible ? "text" : "password"}
                className="raw-password-input"
                value={rawPassword}
                onChange={onRawPasswordChange}
              />
              <div
                title={passwordVisible ? "Hide Password" : "Show Password"}
                className="password-visibility-button"
                onClick={toggleVisibility}
                onKeyDown={() => {}}
                role="switch"
                aria-checked={!passwordVisible}
                tabIndex="0"
              >
                {passwordVisible ? <HideIcon /> : <ShowIcon />}
              </div>
            </div>
            <div className="hash-generator">
              <button onClick={onPasswordHash} type="button" disabled={!rawPassword}>
                Hash
              </button>
            </div>
          </div>
          {password && (
            <>
              <div className="hash-section">
                <div className="flex-row ">
                  <div>Hash</div>
                  <div className="hash-field">{password}</div>
                </div>
              </div>
              <div className="copy-hash-container">
                <button type="button" onClick={copyHash} className="copy-hash-button">
                  <div>Copy Hash</div>
                  <div>
                    <CopyIcon />
                  </div>
                </button>
              </div>
            </>
          )}
          <ErrorMessage error={error} setError={setError} />
        </div>
      </div>
      <Toast text={toast} setText={setTToast} duration={3000} />
    </div>
  );
};

export default PasswordEncryptor;

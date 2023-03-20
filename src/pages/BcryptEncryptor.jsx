import React from "react";
import PasswordEncryptor from "../components/PasswordEncryptor";
import PasswordVerifier from "../components/PasswordVerifier";

const BcryptEncryptor = () => (
  <div style={{ marginBottom: 120 }}>
    <PasswordEncryptor />
    <hr />
    <PasswordVerifier />
  </div>
);

export default BcryptEncryptor;

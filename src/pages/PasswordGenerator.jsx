import React, { useState } from "react";
import Checkbox from "../components/Checkbox";
import ErrorMessage from "../components/ErrorMessage";
import Toast from "../components/Toast";
import { generatePasswordWithOptions } from "../helper/passwordgenerator";
import useMount from "../hooks/useMount";

import "../styles/PasswordGenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [error, setError] = useState("");

  const [toast, setTToast] = useState("");

  const defaultOptions = {
    lower: true,
    upper: true,
    special: true,
    num: true,
  };
  const [options, setOptions] = useState(defaultOptions);

  const lengthOptions = {
    min: 6,
    max: 18,
  };

  const areAllOptionsFalse = () => Object.values(options).filter((x) => x).length > 0;

  const onPasswordgenerate = () => {
    try {
      if (!areAllOptionsFalse()) return setError("Need to select atleast one option to generate password");

      const randomPassword = generatePasswordWithOptions(length, options);
      return setPassword(randomPassword);
    } catch (err) {
      return setError(err?.message);
    }
  };

  useMount(() => {
    onPasswordgenerate();
  });

  const onLengthChange = (e) => {
    const {
      target: { valueAsNumber },
    } = e;

    if (valueAsNumber < lengthOptions.min) {
      setError(`Length cannot be less than ${lengthOptions.min}`);
    }
    if (valueAsNumber > lengthOptions.max) {
      setError(`Length cannot be more than ${lengthOptions.max}`);
    }
    setLength(valueAsNumber);
  };

  const onOptionChange = (e) => {
    const { name, checked } = e.target;
    if (Object.keys(defaultOptions).includes(e.target.name)) {
      setOptions({ ...options, [name]: checked });
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setTToast("Password copied to clipboard!");
  };

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
        <ErrorMessage error={error} setError={setError} />
        <div className="options-section flex-row">
          <div className="flex-row password-length-section">
            <div>Length</div>
            <input
              type="number"
              className="password-length-input"
              value={length}
              onChange={onLengthChange}
              min={lengthOptions.min}
              max={lengthOptions.max}
            />
          </div>
          <div className="password-options-section">
            <Checkbox label="Lowercase" name="lower" checked={options.lower} onChange={onOptionChange} id="lower" />
            <Checkbox label="Uppercase" name="upper" checked={options.upper} onChange={onOptionChange} id="upper" />
            <Checkbox
              label="Special Characters"
              name="special"
              checked={options.special}
              onChange={onOptionChange}
              id="special"
            />
            <Checkbox label="Numbers" name="num" checked={options.num} onChange={onOptionChange} id="num" />
          </div>
        </div>
      </div>
      <div className="copy-password-container">
        <button type="button" onClick={copyPassword} className="copy-password-button">
          Copy Password
        </button>
      </div>
      <Toast text={toast} setText={setTToast} duration={3000} />
    </div>
  );
};

export default PasswordGenerator;

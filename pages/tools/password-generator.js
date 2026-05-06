import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    setPassword(Math.random().toString(36).slice(-12));
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>Password Generator</h1>

      <button onClick={generatePassword}>
        Generate Password
      </button>

      <p>{password}</p>
    </div>
  );
}

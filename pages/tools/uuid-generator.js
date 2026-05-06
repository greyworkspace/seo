import { useState } from "react";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");

  const generateUUID = () => {
    setUuid(crypto.randomUUID());
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>UUID Generator</h1>

      <button onClick={generateUUID}>
        Generate UUID
      </button>

      <p>{uuid}</p>
    </div>
  );
}

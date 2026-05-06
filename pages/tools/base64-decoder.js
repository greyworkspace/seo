import { useState } from "react";

export default function Base64Decoder() {
  const [text,setText] = useState("");

  let decoded = "";

  try {
    decoded = atob(text);
  } catch {
    decoded = "Invalid Base64";
  }

  return (
    <div style={{padding:"20px"}}>
      <h1>Base64 Decoder</h1>

      <textarea
        rows="8"
        style={{width:"100%"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <pre>{decoded}</pre>
    </div>
  );
}

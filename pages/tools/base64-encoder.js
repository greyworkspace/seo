import { useState } from "react";

export default function Base64Encoder() {
  const [text,setText] = useState("");

  return (
    <div style={{padding:"20px"}}>
      <h1>Base64 Encoder</h1>

      <textarea
        rows="8"
        style={{width:"100%"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <pre>{btoa(text)}</pre>
    </div>
  );
}

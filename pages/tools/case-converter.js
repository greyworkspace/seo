import { useState } from "react";

export default function CaseConverter() {
  const [text, setText] = useState("");

  return (
    <div style={{padding:"20px"}}>
      <h1>Case Converter</h1>

      <textarea
        rows="10"
        style={{width:"100%"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <h3>UPPERCASE</h3>
      <p>{text.toUpperCase()}</p>

      <h3>lowercase</h3>
      <p>{text.toLowerCase()}</p>
    </div>
  );
}


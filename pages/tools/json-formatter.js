import { useState } from "react";

export default function JSONFormatter() {
  const [text, setText] = useState("");
  const [formatted, setFormatted] = useState("");

  const formatJSON = () => {
    try {
      const result = JSON.stringify(JSON.parse(text), null, 2);
      setFormatted(result);
    } catch {
      setFormatted("Invalid JSON");
    }
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>JSON Formatter</h1>

      <textarea
        rows="10"
        style={{width:"100%"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <button onClick={formatJSON}>Format</button>

      <pre>{formatted}</pre>
    </div>
  );
}

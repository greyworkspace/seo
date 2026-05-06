import { useState } from "react";

export default function UrlEncoder() {
  const [text,setText] = useState("");

  return (
    <div style={{padding:"20px"}}>
      <h1>URL Encoder</h1>

      <textarea
        rows="8"
        style={{width:"100%"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <pre>{encodeURIComponent(text)}</pre>
    </div>
  );
}

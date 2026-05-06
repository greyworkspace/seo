import { useState } from "react";

export default function UrlDecoder() {
  const [text,setText] = useState("");

  let decoded = "";

  try {
    decoded = decodeURIComponent(text);
  } catch {
    decoded = "Invalid URL";
  }

  return (
    <div style={{padding:"20px"}}>
      <h1>URL Decoder</h1>

      <textarea
        rows="8"
        style={{width:"100%"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <pre>{decoded}</pre>
    </div>
  );
}

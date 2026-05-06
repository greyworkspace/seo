import { useState } from "react";

export default function SlugTool() {
  const [text, setText] = useState("");

  const slug = text.toLowerCase().replace(/\s+/g, "-");

  return (
    <div style={{padding:"20px"}}>
      <h1>Text to Slug</h1>

      <input
        style={{width:"100%",padding:"10px"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <p>{slug}</p>
    </div>
  );
}

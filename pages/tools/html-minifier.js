import { useState } from "react";

export default function HTMLMinifier() {
  const [html,setHtml] = useState("");

  const minified = html.replace(/\s+/g," ");

  return (
    <div style={{padding:"20px"}}>
      <h1>HTML Minifier</h1>

      <textarea
        rows="10"
        style={{width:"100%"}}
        onChange={(e)=>setHtml(e.target.value)}
      />

      <pre>{minified}</pre>
    </div>
  );
}

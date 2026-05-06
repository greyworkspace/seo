import { useState } from "react";

export default function MetaGenerator() {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  return (
    <div style={{padding:"20px"}}>
      <h1>Meta Tag Generator</h1>

      <input
        placeholder="Title"
        style={{width:"100%",padding:"10px"}}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        rows="5"
        style={{width:"100%",marginTop:"10px"}}
        onChange={(e)=>setDesc(e.target.value)}
      />

      <pre>
{`<title>${title}</title>
<meta name="description" content="${desc}" />`}
      </pre>
    </div>
  );
}

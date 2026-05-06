import { useState } from "react";

export default function KeywordDensityChecker() {
  const [text,setText] = useState("");
  const [keyword,setKeyword] = useState("");

  const words = text.toLowerCase().split(/\s+/);
  const count = words.filter(w => w === keyword.toLowerCase()).length;

  return (
    <div style={{padding:"20px"}}>
      <h1>Keyword Density Checker</h1>

      <input
        placeholder="Keyword"
        style={{width:"100%",padding:"10px"}}
        onChange={(e)=>setKeyword(e.target.value)}
      />

      <textarea
        rows="10"
        style={{width:"100%",marginTop:"10px"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <p>Keyword Count: {count}</p>
    </div>
  );
}

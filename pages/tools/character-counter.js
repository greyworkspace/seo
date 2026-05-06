import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div style={{padding:"20px"}}>
      <h1>Character Counter</h1>

      <textarea
        rows="10"
        style={{width:"100%"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}

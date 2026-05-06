import { useState } from "react";

export default function RandomTextGenerator() {
  const [text,setText] = useState("");

  const generateText = () => {
    setText("Lorem ipsum dolor sit amet consectetur adipiscing elit.");
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>Random Text Generator</h1>

      <button onClick={generateText}>
        Generate Text
      </button>

      <p>{text}</p>
    </div>
  );
}

import { useState } from "react";

export default function PageSizeChecker() {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState("");

  const checkSize = async () => {
    try {
      const response = await fetch(url);
      const text = await response.text();

      const bytes = new Blob([text]).size;
      const kb = (bytes / 1024).toFixed(2);

      setSize(`${kb} KB`);
    } catch {
      setSize("Error fetching page");
    }
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>Page Size Checker</h1>

      <input
        type="text"
        placeholder="https://example.com"
        style={{width:"100%",padding:"10px"}}
        onChange={(e)=>setUrl(e.target.value)}
      />

      <button onClick={checkSize} style={{marginTop:"10px"}}>
        Check Size
      </button>

      <p>Page Size: {size}</p>
    </div>
  );
}

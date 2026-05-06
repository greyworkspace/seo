import { useState } from "react";

export default function HTTPStatusChecker() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");

  const checkStatus = async () => {
    try {
      const response = await fetch(url);
      setStatus(response.status);
    } catch {
      setStatus("Error fetching URL");
    }
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>HTTP Status Checker</h1>

      <input
        type="text"
        placeholder="https://example.com"
        style={{width:"100%",padding:"10px"}}
        onChange={(e)=>setUrl(e.target.value)}
      />

      <button onClick={checkStatus} style={{marginTop:"10px"}}>
        Check Status
      </button>

      <p>Status: {status}</p>
    </div>
  );
}

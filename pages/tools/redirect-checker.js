import { useState } from "react";

export default function RedirectChecker() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const checkRedirect = async () => {
    try {
      const response = await fetch(url, {
        redirect: "manual"
      });

      if (response.status >= 300 && response.status < 400) {
        setResult("This URL redirects");
      } else {
        setResult("No redirect found");
      }
    } catch {
      setResult("Error checking redirect");
    }
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>Redirect Checker</h1>

      <input
        type="text"
        placeholder="https://example.com"
        style={{width:"100%",padding:"10px"}}
        onChange={(e)=>setUrl(e.target.value)}
      />

      <button onClick={checkRedirect} style={{marginTop:"10px"}}>
        Check Redirect
      </button>

      <p>{result}</p>
    </div>
  );
}

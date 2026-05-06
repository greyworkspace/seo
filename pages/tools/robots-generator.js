import { useState } from "react";

export default function RobotsGenerator() {
  const [domain, setDomain] = useState("");

  return (
    <div style={{padding:"20px"}}>
      <h1>Robots.txt Generator</h1>

      <input
        type="text"
        placeholder="yourdomain.com"
        style={{width:"100%",padding:"10px"}}
        onChange={(e)=>setDomain(e.target.value)}
      />

      <pre style={{marginTop:"20px"}}>
{`User-agent: *
Allow: /

Sitemap: https://${domain}/sitemap.xml`}
      </pre>
    </div>
  );
}

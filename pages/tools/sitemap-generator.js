import { useState } from "react";
import Layout from "../../components/Layout";

export default function SitemapGenerator() {

  const [urls,setUrls] = useState("");

  const generated =
urls
.split("\n")
.map(
(url)=>
`<url>
  <loc>${url}</loc>
</url>`
)
.join("\n");

const result =
`<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${generated}

</urlset>`;

  const copyCode = async () => {
    await navigator.clipboard.writeText(result);
    alert("Sitemap copied!");
  };

  return (

    <Layout>

      <div style={container}>

        <h1 style={heading}>🗺️ Sitemap Generator</h1>

        <p style={sub}>
          Generate XML sitemap instantly
        </p>

        <textarea
          rows="8"
          placeholder="Enter one URL per line"
          value={urls}
          onChange={(e)=>setUrls(e.target.value)}
          style={textarea}
        />

        <div style={outputBox}>

          <div style={topBar}>
            <span>Generated Sitemap</span>

            <button
              onClick={copyCode}
              style={copyBtn}
            >
              Copy
            </button>
          </div>

          <pre style={code}>
{result}
          </pre>

        </div>

      </div>

    </Layout>
  );
}

const container = {
  maxWidth:"900px",
  margin:"auto",
  background:"rgba(255,255,255,0.06)",
  backdropFilter:"blur(20px)",
  border:"1px solid rgba(255,255,255,0.1)",
  padding:"35px",
  borderRadius:"25px"
};

const heading = {
  fontSize:"40px",
  marginBottom:"10px"
};

const sub = {
  color:"#cbd5e1",
  marginBottom:"25px"
};

const textarea = {
  width:"100%",
  padding:"15px",
  borderRadius:"14px",
  border:"none",
  fontSize:"16px"
};

const outputBox = {
  marginTop:"30px",
  background:"#0f172a",
  borderRadius:"20px",
  overflow:"hidden"
};

const topBar = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  padding:"15px 20px",
  background:"#111827"
};

const copyBtn = {
  background:"#2563eb",
  color:"#fff",
  border:"none",
  padding:"10px 16px",
  borderRadius:"10px",
  cursor:"pointer"
};

const code = {
  padding:"20px",
  color:"#facc15",
  whiteSpace:"pre-wrap"
};

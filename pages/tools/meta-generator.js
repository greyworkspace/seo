import { useState } from "react";
import Layout from "../../components/Layout";

export default function MetaGenerator() {

  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  const result =
`<title>${title}</title>

<meta name="description" content="${desc}" />`;

  const copyCode = async () => {
    await navigator.clipboard.writeText(result);
    alert("Meta tags copied!");
  };

  return (

    <Layout>

      <div style={container}>

        <h1 style={heading}>🏷️ Meta Tag Generator</h1>

        <p style={sub}>
          Generate SEO meta tags instantly
        </p>

        <input
          placeholder="Enter page title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          style={input}
        />

        <textarea
          rows="5"
          placeholder="Enter meta description"
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}
          style={textarea}
        />

        <div style={outputBox}>

          <div style={topBar}>
            <span>Generated Meta Tags</span>

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

const input = {
  width:"100%",
  padding:"15px",
  borderRadius:"14px",
  border:"none",
  marginBottom:"15px",
  fontSize:"16px"
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
  color:"#38bdf8",
  whiteSpace:"pre-wrap"
};

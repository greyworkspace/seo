import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characters = text.length;

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div style={{
      minHeight:"100vh",
      background:"#f3f4f6",
      padding:"40px",
      fontFamily:"Arial"
    }}>

      <div style={{
        maxWidth:"900px",
        margin:"auto",
        background:"#fff",
        padding:"30px",
        borderRadius:"20px",
        boxShadow:"0 5px 20px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{
          fontSize:"40px",
          marginBottom:"10px"
        }}>
          Word Counter
        </h1>

        <p style={{
          color:"#666",
          marginBottom:"20px"
        }}>
          Count words and characters instantly
        </p>

        <textarea
          rows="12"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Type or paste your text here..."
          style={{
            width:"100%",
            padding:"20px",
            borderRadius:"12px",
            border:"2px solid #ddd",
            fontSize:"18px",
            outline:"none"
          }}
        />

        <div style={{
          display:"flex",
          gap:"20px",
          marginTop:"20px",
          flexWrap:"wrap"
        }}>

          <div style={{
            flex:"1",
            background:"#111827",
            color:"#fff",
            padding:"20px",
            borderRadius:"15px"
          }}>
            <h2>{words}</h2>
            <p>Words</p>
          </div>

          <div style={{
            flex:"1",
            background:"#2563eb",
            color:"#fff",
            padding:"20px",
            borderRadius:"15px"
          }}>
            <h2>{characters}</h2>
            <p>Characters</p>
          </div>

        </div>

        <button
          onClick={copyText}
          style={{
            marginTop:"20px",
            background:"#111827",
            color:"#fff",
            padding:"12px 25px",
            border:"none",
            borderRadius:"10px",
            cursor:"pointer",
            fontSize:"16px"
          }}
        >
          Copy Text
        </button>

      </div>
    </div>
  );
}

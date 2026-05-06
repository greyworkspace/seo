import { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout";

const Editor = dynamic(
  () =>
    import("@tinymce/tinymce-react").then(
      (mod) => mod.Editor
    ),
  { ssr: false }
);

export default function TextHTMLEditor() {

  const [content,setContent] = useState("");

  const copyHTML = async () => {
    await navigator.clipboard.writeText(content);
    alert("HTML copied!");
  };

  return (

    <Layout>

      <div style={container}>

        {/* HEADER OPTIONS */}

        <div style={toolbar}>

          <button style={toolBtn}>✔ Inline styles</button>
          <button style={toolBtn}>✔ Classes & IDs</button>
          <button style={toolBtn}>✔ Empty tags</button>
          <button style={toolBtn}>✔ Comments</button>
          <button style={toolBtn}>✔ All tags</button>

        </div>

        {/* SPLIT SCREEN */}

        <div style={split}>

          {/* LEFT */}

          <div style={panel}>

            <h2 style={title}>
              ✍️ Text Editor
            </h2>

            <Editor
              apiKey="no-api-key"
              value={content}
              onEditorChange={(newValue)=>{
                setContent(newValue);
              }}
              init={{
                height:600,
                menubar:true,
                plugins:[
                  "lists",
                  "link",
                  "image",
                  "table",
                  "code"
                ],
                toolbar:
                  "undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | code"
              }}
            />

          </div>

          {/* RIGHT */}

          <div style={panel}>

            <div style={topBar}>

              <h2 style={title}>
                💻 HTML Output
              </h2>

              <button
                onClick={copyHTML}
                style={copyBtn}
              >
                Copy
              </button>

            </div>

            <pre style={code}>
{content}
            </pre>

          </div>

        </div>

      </div>

    </Layout>
  );
}

const container = {
  padding:"20px"
};

const toolbar = {
  display:"flex",
  gap:"10px",
  flexWrap:"wrap",
  marginBottom:"20px"
};

const toolBtn = {
  background:"#166534",
  color:"#fff",
  border:"none",
  padding:"10px 15px",
  borderRadius:"10px",
  cursor:"pointer"
};

const split = {
  display:"grid",
  gridTemplateColumns:"1fr 1fr",
  gap:"20px"
};

const panel = {
  background:"rgba(255,255,255,0.06)",
  backdropFilter:"blur(20px)",
  border:"1px solid rgba(255,255,255,0.1)",
  borderRadius:"20px",
  padding:"20px"
};

const title = {
  marginBottom:"15px"
};

const topBar = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  marginBottom:"15px"
};

const copyBtn = {
  background:"#2563eb",
  color:"#fff",
  border:"none",
  padding:"10px 15px",
  borderRadius:"10px",
  cursor:"pointer"
};

const code = {
  background:"#0f172a",
  color:"#4ade80",
  padding:"20px",
  borderRadius:"15px",
  minHeight:"600px",
  overflow:"auto",
  whiteSpace:"pre-wrap"
};

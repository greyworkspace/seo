import { useState } from "react";
import Layout from "../../components/Layout";

export default function WordCounter() {
  const [text,setText] = useState("");

  return (
    <Layout>
      <h1>Word Counter Tool</h1>

      <textarea
        rows="10"
        style={{width:"100%"}}
        onChange={(e)=>setText(e.target.value)}
      />

      <p>Words: {text.split(/\s+/).filter(Boolean).length}</p>
    </Layout>
  );
}

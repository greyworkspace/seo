import { useState } from "react";

export default function SitemapGenerator() {
  const [urls, setUrls] = useState("");

  const generateSitemap = () => {
    return urls
      .split("\n")
      .map(
        (url) => `
<url>
  <loc>${url}</loc>
</url>`
      )
      .join("");
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>XML Sitemap Generator</h1>

      <textarea
        rows="10"
        placeholder="Enter one URL per line"
        style={{width:"100%"}}
        onChange={(e)=>setUrls(e.target.value)}
      />

      <pre style={{marginTop:"20px"}}>
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generateSitemap()}
</urlset>`}
      </pre>
    </div>
  );
}

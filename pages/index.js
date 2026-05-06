import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const tools = [
  {
    name: "Word Counter",
    category: "Content",
    desc: "Count words and characters instantly",
    link: "/tools/word-counter",
    icon: "📝"
  },
  {
    name: "Meta Tag Generator",
    category: "SEO",
    desc: "Generate SEO meta tags",
    link: "/tools/meta-generator",
    icon: "🏷️"
  },
  {
    name: "Robots.txt Generator",
    category: "SEO",
    desc: "Create robots.txt file",
    link: "/tools/robots-generator",
    icon: "🤖"
  },
  {
    name: "Sitemap Generator",
    category: "SEO",
    desc: "Generate XML sitemap",
    link: "/tools/sitemap-generator",
    icon: "🗺️"
  }
];

export default function Home() {

  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>

        <title>Free SEO Tools</title>

        <meta
          name="description"
          content="Best free SEO tools website for bloggers and developers."
        />

        {/* SEO Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":"https://schema.org",
              "@type":"WebSite",
              "name":"Free SEO Tools",
              "url":"https://yourdomain.com"
            })
          }}
        />

      </Head>

      <div style={{
        display:"flex",
        background:"#020617",
        minHeight:"100vh",
        color:"#fff",
        fontFamily:"Arial"
      }}>

        {/* SIDEBAR */}

        <aside style={{
          width:"250px",
          background:"rgba(255,255,255,0.05)",
          backdropFilter:"blur(20px)",
          borderRight:"1px solid rgba(255,255,255,0.1)",
          padding:"30px",
          position:"sticky",
          top:"0",
          height:"100vh"
        }}>

          <h2 style={{
            marginBottom:"40px"
          }}>
            🚀 SEO Tools
          </h2>

          <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}>

            <button style={btnStyle}>All Tools</button>
            <button style={btnStyle}>SEO Tools</button>
            <button style={btnStyle}>Content Tools</button>
            <button style={btnStyle}>Generators</button>

          </div>

        </aside>

        {/* MAIN */}

        <main style={{
          flex:"1",
          padding:"40px"
        }}>

          {/* HERO */}

          <div style={{
            textAlign:"center",
            marginBottom:"50px"
          }}>

            <h1 style={{
              fontSize:"60px",
              marginBottom:"20px"
            }}>
              Free SEO Tools
            </h1>

            <p style={{
              color:"#cbd5e1",
              fontSize:"20px"
            }}>
              Best tools to improve website SEO 🔥
            </p>

            {/* SEARCH */}

            <input
              type="text"
              placeholder="Search tool..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              style={{
                marginTop:"30px",
                width:"100%",
                maxWidth:"500px",
                padding:"15px",
                borderRadius:"50px",
                border:"none",
                outline:"none",
                fontSize:"18px"
              }}
            />

          </div>

          {/* TOOLS GRID */}

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
            gap:"25px"
          }}>

            {filteredTools.map((tool,index)=>(
              <Link
                href={tool.link}
                key={index}
                style={{textDecoration:"none"}}
              >

                <div style={{
                  background:"rgba(255,255,255,0.06)",
                  backdropFilter:"blur(20px)",
                  border:"1px solid rgba(255,255,255,0.1)",
                  padding:"30px",
                  borderRadius:"25px",
                  transition:"0.3s",
                  cursor:"pointer"
                }}

                onMouseEnter={(e)=>{
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.border =
                  "1px solid #3b82f6";
                }}

                onMouseLeave={(e)=>{
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.1)";
                }}

                >

                  <div style={{
                    fontSize:"55px"
                  }}>
                    {tool.icon}
                  </div>

                  <span style={{
                    color:"#3b82f6",
                    fontSize:"14px"
                  }}>
                    {tool.category}
                  </span>

                  <h3 style={{
                    marginTop:"15px",
                    color:"#fff"
                  }}>
                    {tool.name}
                  </h3>

                  <p style={{
                    color:"#cbd5e1"
                  }}>
                    {tool.desc}
                  </p>

                </div>

              </Link>
            ))}

          </div>

        </main>

      </div>
    </>
  );
}

const btnStyle = {
  padding:"12px",
  borderRadius:"12px",
  border:"none",
  background:"rgba(255,255,255,0.08)",
  color:"#fff",
  cursor:"pointer",
  fontSize:"16px"
};

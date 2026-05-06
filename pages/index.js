import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Free SEO Tools - 100% Free Online SEO Checker Tools</title>
        <meta
          name="description"
          content="Use our free SEO tools like Word Counter, Meta Generator, Robots.txt Generator and more to improve your website ranking."
        />
        <meta name="keywords" content="free seo tools, seo checker, seo tools online, website seo tools" />
      </Head>

      <main style={{fontFamily:"Arial", background:"#f5f7fa"}}>

        {/* HERO SECTION */}
        <section style={{
          background:"linear-gradient(90deg,#0f2027,#2c5364)",
          color:"#fff",
          padding:"60px 20px",
          textAlign:"center"
        }}>
          <h1 style={{fontSize:"40px"}}>Free SEO Tools</h1>
          <p>Boost your website ranking with our powerful free SEO tools</p>

          <input
            placeholder="Search SEO Tool..."
            style={{
              padding:"12px",
              width:"60%",
              maxWidth:"400px",
              borderRadius:"30px",
              border:"none",
              marginTop:"20px"
            }}
          />
        </section>

        {/* TOOLS GRID */}
        <section style={{padding:"40px 20px"}}>
          <h2 style={{textAlign:"center"}}>All Tools</h2>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(220px,1fr))",
            gap:"20px",
            marginTop:"30px"
          }}>

            {tools.map((tool, i) => (
              <a key={i} href={tool.link} style={{
                textDecoration:"none",
                color:"#000"
              }}>
                <div style={{
                  background:"#fff",
                  padding:"20px",
                  borderRadius:"10px",
                  boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
                  transition:"0.3s"
                }}>
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                </div>
              </a>
            ))}

          </div>
        </section>

        {/* CONTENT SECTION (SEO RANKING KEY 🔥) */}
        <section style={{padding:"40px 20px", maxWidth:"900px", margin:"auto"}}>
          <h2>Best Free SEO Tools Online</h2>

          <p>
            Our free SEO tools help you analyze, optimize, and improve your website ranking on search engines like Google.
            Whether you are a blogger, developer, or business owner, these tools are designed to give fast and accurate results.
          </p>

          <h3>Why Use Our SEO Tools?</h3>
          <ul>
            <li>100% Free to use</li>
            <li>No login required</li>
            <li>Fast and accurate results</li>
            <li>Works on all devices</li>
          </ul>

          <h3>Popular SEO Tools</h3>
          <p>
            Some of our most popular tools include Word Counter, Meta Tag Generator, Robots.txt Generator, and XML Sitemap Generator.
          </p>
        </section>

      </main>
    </>
  );
}
import Link from "next/link";

const tools = [
  {
    name: "Word Counter",
    desc: "Count words and characters instantly",
    link: "/tools/word-counter",
    icon: "📝"
  },
  {
    name: "Meta Tag Generator",
    desc: "Generate SEO meta tags easily",
    link: "/tools/meta-generator",
    icon: "🏷️"
  },
  {
    name: "Robots.txt Generator",
    desc: "Create robots.txt file for SEO",
    link: "/tools/robots-generator",
    icon: "🤖"
  },
  {
    name: "Sitemap Generator",
    desc: "Generate XML sitemap",
    link: "/tools/sitemap-generator",
    icon: "🗺️"
  }
];

export default function Home() {
  return (
    <div style={{
      background:"#0f172a",
      minHeight:"100vh",
      color:"#fff",
      fontFamily:"Arial"
    }}>

      {/* HERO */}

      <div style={{
        textAlign:"center",
        padding:"80px 20px",
        background:"linear-gradient(90deg,#0f172a,#1e3a8a)"
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
          Powerful free tools to improve your website SEO 🚀
        </p>

      </div>

      {/* TOOLS */}

      <div style={{
        maxWidth:"1200px",
        margin:"auto",
        padding:"50px 20px"
      }}>

        <h2 style={{
          textAlign:"center",
          marginBottom:"40px",
          fontSize:"40px"
        }}>
          Popular SEO Tools
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"25px"
        }}>

          {tools.map((tool,index)=>(
            <Link
              key={index}
              href={tool.link}
              style={{textDecoration:"none"}}
            >
              <div style={{
                background:"#1e293b",
                padding:"30px",
                borderRadius:"20px",
                transition:"0.3s",
                cursor:"pointer",
                border:"1px solid #334155"
              }}>

                <div style={{
                  fontSize:"50px"
                }}>
                  {tool.icon}
                </div>

                <h3 style={{
                  color:"#fff",
                  marginTop:"20px"
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

      </div>

    </div>
  );
}

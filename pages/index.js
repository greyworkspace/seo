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

const tools = [
  {
    name: "Word Counter",
    desc: "Count words and characters instantly",
    link: "/tools/word-counter"
  },
  {
    name: "Meta Tag Generator",
    desc: "Generate SEO meta tags easily",
    link: "/tools/meta-generator"
  },
  {
    name: "Robots.txt Generator",
    desc: "Create robots.txt file for SEO",
    link: "/tools/robots-generator"
  },
  {
    name: "Sitemap Generator",
    desc: "Generate XML sitemap",
    link: "/tools/sitemap-generator"
  }
];

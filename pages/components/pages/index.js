import Layout from "../components/Layout";
import ToolCard from "../components/ToolCard";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Free SEO Tools - Best SEO Tools Online</title>
      </Head>

      <h1>Free SEO Tools</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"20px"
      }}>
        {tools.map((t,i)=>(
          <ToolCard key={i} {...t} />
        ))}
      </div>
    </Layout>
  );
}

const tools = [
  {name:"Word Counter",desc:"Count words instantly",link:"/tools/word-counter"},
  {name:"Meta Generator",desc:"Generate meta tags",link:"/tools/meta-generator"},
  {name:"Robots Generator",desc:"Create robots.txt",link:"/tools/robots-generator"},
  {name:"Sitemap Generator",desc:"Generate sitemap",link:"/tools/sitemap-generator"},
];

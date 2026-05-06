export default function Sidebar() {
  const items = [
    "All Tools",
    "SEO Analysis",
    "Keyword Tools",
    "Link Tools",
    "Content Tools"
  ];

  return (
    <div style={{
      width:"220px",
      background:"#1e293b",
      color:"#fff",
      height:"100vh",
      padding:"20px"
    }}>
      <h2>SEO Tools</h2>

      {items.map((item,i)=>(
        <div key={i} style={{
          padding:"10px",
          marginTop:"10px",
          background:"#334155",
          borderRadius:"6px",
          cursor:"pointer"
        }}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default function ToolCard({name,desc,link}) {
  return (
    <a href={link} style={{textDecoration:"none", color:"#000"}}>
      <div style={{
        background:"#fff",
        padding:"20px",
        borderRadius:"12px",
        boxShadow:"0 5px 15px rgba(0,0,0,0.1)",
        transition:"0.3s"
      }}>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </a>
  );
}

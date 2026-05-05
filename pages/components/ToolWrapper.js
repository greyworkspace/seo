export default function ToolWrapper({title, children}) {
  return (
    <div style={{padding:"20px"}}>
      <h1>{title}</h1>
      <div style={{
        background:"#fff",
        padding:"20px",
        borderRadius:"10px",
        boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
      }}>
        {children}
      </div>
    </div>
  );
}

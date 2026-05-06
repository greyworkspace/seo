import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <div style={{flex:1, padding:"20px", background:"#f5f7fa"}}>
        {children}
      </div>
    </div>
  );
}

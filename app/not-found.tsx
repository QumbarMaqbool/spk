import Link from "next/link";
export default function NotFound() {
  return (
    <html><body style={{display:"grid",placeItems:"center",minHeight:"100vh",fontFamily:"system-ui",background:"#1B2A4A",color:"#F8F6F1"}}>
      <div style={{textAlign:"center"}}>
        <h1 style={{fontSize:"6rem",color:"#F5A623",margin:0}}>404</h1>
        <p>Page not found</p>
        <Link href="/en" style={{color:"#F5A623"}}>Go home</Link>
      </div>
    </body></html>
  );
}

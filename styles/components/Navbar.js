import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{display:"flex",justifyContent:"space-around",padding:"10px 0",background:"#4b7bec",color:"#fff"}}>
      <h3>Ingrective</h3>
      <div style={{display:"flex",gap:"20px"}}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ocr">OCR</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

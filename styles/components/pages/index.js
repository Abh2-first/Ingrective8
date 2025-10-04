import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section style={{padding:"50px 20px",textAlign:"center"}}>
        <h1>Welcome to Ingrective</h1>
        <p>AI-powered Food Ingredient Analyzer — Understand what you eat.</p>
      </section>
    </>
  );
}

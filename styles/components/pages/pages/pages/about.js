import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div style={{padding:"30px"}}>
        <h1>About Ingrective</h1>
        <p>
          Ingrective helps users identify harmful ingredients like Maltodextrin, 
          artificial sweeteners, and preservatives by scanning product labels 
          using AI.
        </p>
      </div>
    </>
  );
}

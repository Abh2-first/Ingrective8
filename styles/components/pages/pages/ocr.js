import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function OCR() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please upload an image first");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "https://tigerabhay-ingrective5.hf.space/api/predict/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setText(res.data?.result || "No text found");
    } catch (err) {
      setText("Error while reading the image");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div style={{padding:"40px",textAlign:"center"}}>
        <h1>OCR Ingredient Analyzer</h1>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload}>Analyze</button>
        <div style={{marginTop:"20px"}}>
          {loading ? <p>Analyzing...</p> : <pre>{text}</pre>}
        </div>
      </div>
    </>
  );
}

import React, { useRef, useState, useEffect } from "react";
import "./profilepic.css";

export default function UseRefHook() {
  // --- eg1: Focus ---
  const inputref = useRef();
  const focusinput = () => {
    inputref.current.focus();
  };

  // --- eg2: Timer ---
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // --- eg3: Image Upload ---
  const [newProduct, setNewProduct] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const imgRef = useRef();

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProduct(false);
    }
  };

  const triggerUpload = () => {
    imgRef.current.click();
  };

  return (
    <div className="main-wrapper">
      {/* eg1 */}
      <nav className="example-nav">
        <input 
          type="text" 
          placeholder="Enter data" 
          ref={inputref} 
          className="text-input"
        />
        <button onClick={focusinput} className="action-btn">
          To focus an input
        </button>
      </nav>

      {/* eg2 */}
      <nav className="example-nav">
        <h3>timer: {sec}</h3>
        <button 
          onClick={() => clearInterval(intervalRef.current)} 
          className="action-btn"
        >
          Stop
        </button>
      </nav>

      {/* eg3 */}
      <nav className="example-nav">
        <input 
          type="file" 
          ref={imgRef} 
          hidden 
          onChange={handleImg} 
          accept="image/*" 
        />
        
        {newProduct ? (
          <div onClick={triggerUpload} className="image-placeholder">
            <h3 className="font-style">Profile Picture</h3>
          </div>
        ) : (
          <img
            src={imageURL}
            className="org-img"
            alt="Preview"
          />
        )}

        <button onClick={triggerUpload} className="update-btn">
          {newProduct ? "Upload Image" : "Update Image"}
        </button>
      </nav>
    </div>
  );
}
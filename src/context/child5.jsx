// Child5.js
import React, { useContext } from "react";
import { DataContext } from "./DataContext";

const Child5 = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <div style={{ border: "2px solid purple", padding: "15px", margin: "10px" }}></div>
      <h2>Child 5 (Deep Nested)</h2>
      <p><strong>Message:</strong> {data.message}</p>
      <p><strong>Name:</strong> {data.name}</p>
    </div>
  );
};

export default Child5;
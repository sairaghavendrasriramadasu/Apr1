// Child4.js
import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import Child5 from "./child5";

const Child4 = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <div style={{ border: "2px solid gray", padding: "10px", margin: "15px" }}>
        <h2>Child 4</h2>
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>Name:</strong> {data.name}</p>
      </div>
      <Child5 />
    </div>
  );
};

export default Child4;
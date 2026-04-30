// Child3.js
import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import Child4 from "./child4";

const Child3 = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <div style={{ border: "2px solid gray", padding: "10px", margin: "20px" }}>
        <h2>Child 3</h2>
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>Name:</strong> {data.name}</p>
      </div>
      <Child4 />
    </div>
  );
};

export default Child3;
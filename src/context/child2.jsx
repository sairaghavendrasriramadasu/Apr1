// Child2.js
import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import Child3 from "./child3";

const Child2 = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <div style={{ border: "2px solid gray", padding: "10px", margin: "25px" }}>
        <h2>Child 2</h2>
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>Name:</strong> {data.name}</p>
      </div>
      <Child3 />
    </div>
  );
};

export default Child2;
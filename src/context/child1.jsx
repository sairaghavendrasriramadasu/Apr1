// Child1.js
import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import Child2 from "./child2";

const Child1 = () => {
  const data = useContext(DataContext);

  return (
    <div>
       <div style={{ border: "2px solid gray", padding: "10px", margin: "30px" }}>
        <h2>Child 1</h2>
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>Name:</strong> {data.name}</p>
      </div>
      <Child2 />
    </div>
  );
};

export default Child1;
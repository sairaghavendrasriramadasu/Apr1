
import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import Child1 from "./child1";

const Parent = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <div style={{ border: "2px solid black", padding: "60px", margin: "40px" }}>
        <h1>Parent Component</h1>
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>Name:</strong> {data.name}</p>
      </div>
      <Child1 />
    </div>
  );
};

export default Parent;
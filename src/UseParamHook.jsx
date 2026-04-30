import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UseParamHook() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>User Name list</h2>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/blogs/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
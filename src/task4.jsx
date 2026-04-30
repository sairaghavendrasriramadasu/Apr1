import React, { useState } from "react";
import "./task4.css";

function SigninSignout() {
  // State for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle Sign In
  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  // Handle Sign Out
  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setIsLoggedIn(false);
  };

  return (
    <div className="signin-container">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Sign In</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signin-input"
          />
          <br /><br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signin-input"
          />
          <br /><br />

          <button type="submit" className="signin-button">Sign In</button>
        </form>
      ) : (
        <div className="welcome-message">
          <h2>Welcome, {email}</h2>
          <button onClick={handleLogout} className="signout-button">Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default SigninSignout;
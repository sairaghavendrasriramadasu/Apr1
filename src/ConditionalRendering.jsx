import React, { useState } from "react";
import "./ConditionalRendering.css";

export default function ConditionalRendering() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggleContent = () => {
    setIsContentVisible((current) => !current);
  };

  const handleAuthToggle = () => {
    setIsLoggedIn((current) => !current);
    setMessage("");
  };

  const handleShowSuccess = () => {
    setMessage("✅ Success! Your action was completed.");
  };

  const handleShowError = () => {
    setMessage("❌ Error: Something went wrong. Please try again.");
  };

  return (
    <div className="conditional-container">
      <h1 className="conditional-title">Conditional Rendering</h1>

      <section className="section">
        <h2>Show / Hide Content</h2>
        <button className="toggle-btn" onClick={handleToggleContent}>
          {isContentVisible ? "Hide" : "Show"} Content
        </button>
        {isContentVisible && (
          <div className="content-panel">
            This paragraph is now visible because the button condition is true.
          </div>
        )}
      </section>

      <section className="section">
        <h2>Login / Logout Toggle</h2>
        <button className="auth-btn" onClick={handleAuthToggle}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <p className="status-text">
          {isLoggedIn ? "Welcome back, user!" : "Please log in to continue."}
        </p>
      </section>

      <section className="section">
        <h2>Action Messages</h2>
        <button className="message-btn" onClick={handleShowSuccess}>
          Show Success
        </button>
        <button className="message-btn" onClick={handleShowError}>
          Show Error
        </button>
        {message && (
          <p className={`message ${message.startsWith("✅") ? "success" : "error"}`}>
            {message}
          </p>
        )}
      </section>
    </div>
  );
}

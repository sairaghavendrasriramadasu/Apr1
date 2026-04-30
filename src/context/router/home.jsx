import React, { useState } from 'react'

export default function Home() {
  const [userField, setUserField] = useState('');

  return (
    <div className="route-page">
      <h2 className="route-title">Home</h2>
      <p className="route-text">Welcome to the React routing demo. Use the navigation above to explore the available pages.</p>
      <div>
        <label htmlFor="userField">User Field:</label>
        <input
          type="text"
          id="userField"
          value={userField}
          onChange={(e) => setUserField(e.target.value)}
          placeholder="Enter user information"
        />
        <p>Current value: {userField}</p>
      </div>
    </div>
  )
}
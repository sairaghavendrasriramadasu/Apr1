import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams(); // Grabs the ID from the URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(err => console.error("Error fetching user details:", err));
  }, [id]);

  if (!user) return <p>Loading user details...</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
        <Link to="/">← Back to List</Link>
        <h1>{user.name}</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        
        <h3>Company</h3>
        <p>{user.company.name}</p>

        <h3>Address</h3>
        <p>
          {user.address.street}, {user.address.suite}<br />
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
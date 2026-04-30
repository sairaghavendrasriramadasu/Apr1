import React, { useContext } from 'react';
import { FormContext } from './DataContext';

function FieldsComponent() {
  const { formData, handleInputChange } = useContext(FormContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px', marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' ,alignItems: 'center',justifyContent: 'center'}}>
      <h3>Input Fields</h3>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br /><br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <p>Current User: {formData.username || 'None'}</p>
    </div>
  );
}

export default FieldsComponent;
import React, { useState } from 'react';
import { FormContext } from './DataContext';
import FieldsComponent from './fieldcomponet';
import ButtonComponent from './buttoncomponet';

export default function ParentComponent() {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [theme, setTheme] = useState('light');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Context value object
  const contextValue = {
    formData,
    handleInputChange,
    theme,
    toggleTheme
  };

  return (
    <FormContext.Provider value={contextValue}>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: theme === 'light' ? '#fff' : '#333', 
        color: theme === 'light' ? '#000' : '#fff',
        padding: '30px',
        minHeight: '100vh' 
      }}>
        <h2>Context API Form</h2>
        <FieldsComponent />
        <ButtonComponent />
      </div>
    </FormContext.Provider>
  );
}
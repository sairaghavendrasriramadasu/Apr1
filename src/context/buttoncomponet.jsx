import React, { useContext } from 'react';
import { FormContext } from './DataContext';

function ButtonComponent() {
  const { theme, toggleTheme } = useContext(FormContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        cursor: 'pointer',
        padding: '15px 25px',
        backgroundColor: theme === 'light' ? '#000' : '#fff',
        color: theme === 'light' ? '#fff' : '#000',
        border: 'none',
        borderRadius: '1px'
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ButtonComponent;
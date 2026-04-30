import React, { useState } from 'react';

const MiniChatApp = () => {
  // Step 2: Initialize state
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  // Handle sending the message
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      // Add new message to the list and clear the input
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Mini Chat Application</h2>
      
      {/* Step 1: UI Setup */}
      <div style={styles.chatContainer}>
        <input 
          type="text" 
          placeholder="Type a message..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send Message
        </button>
      </div>

      {/* Display messages */}
      <div style={styles.messageList}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.messageItem}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

// Basic styling to keep it tidy
const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px' },
  chatContainer: { display: 'flex', gap: '10px', marginBottom: '20px' },
  input: { flex: 1, padding: '8px' },
  button: { padding: '8px 15px', cursor: 'pointer', backgroundColor: '#054b96', color: 'white', border: 'none', borderRadius: '4px' },
  messageList: { borderTop: '1px solid #ddd', paddingTop: '10px' },
  messageItem: { backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '5px', marginBottom: '5px' }
};

export default MiniChatApp;
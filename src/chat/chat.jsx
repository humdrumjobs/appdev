import React, { useState } from 'react';
import './chat.css';
import './chatClient.jsx';

export function Chat() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!name || !message) return;
  
    const messageData = {
      name,
      msg: message,
    };
  
    if (window.chatClient && window.chatClient.send) {
      try {
        window.chatClient.send(JSON.stringify(messageData));
        setMessage(''); // Clear the input field on success
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <div className="name">
        <fieldset id="name-controls">
          <legend>My Name</legend>
          <input
            id="my-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
      </div>

      <fieldset id="chat-controls">
        <legend>Chat</legend>
        <input
          id="new-msg"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage} disabled={!name || !message}>
          Send
        </button>
      </fieldset>
      <div id="chat-text"></div>
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/wws`);
const messageQueue = []; // Queue for messages sent while WebSocket is connecting

socket.onopen = () => {
  console.log('Connected to WebSocket');
  console.log('WebSocket readyState:', socket.readyState);

  // Send any queued messages
  while (messageQueue.length > 0) {
    const data = messageQueue.shift();
    socket.send(data);
  }
};

socket.onclose = () => {
  console.log('WebSocket disconnected');
};

window.chatClient = {
  send: (data) => {
    console.log('WebSocket readyState:', socket.readyState);

    if (socket.readyState === WebSocket.OPEN) {
      socket.send(data); // Send immediately if the connection is open
    } else if (socket.readyState === WebSocket.CONNECTING) {
      console.log('WebSocket is connecting. Message queued.');
      messageQueue.push(data); // Queue the message if the connection is not yet open
    } else {
      console.error('WebSocket is not open and cannot send data');
    }
  },
  onMessage: (callback) => {
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      callback(message);
    };
  },
};

const ChatApp = () => {
  const [socket, setSocket] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const chatTextRef = useRef(null);

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);

    ws.onopen = () => appendMsg('system', 'websocket', 'connected');
    ws.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMsg('friend', chat.name, chat.msg);
    };
    ws.onclose = () => {
      appendMsg('system', 'websocket', 'disconnected');
      disableInterface();
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const appendMsg = (cls, from, msg) => {
    setMessages((prevMessages) => [
      { cls, from, msg },
      ...prevMessages,
    ]);
  };

  const disableInterface = () => {
    setName('');
  };

  const sendMessage = () => {
    if (message && name) {
      appendMsg('me', 'me', message);
      socket.send(JSON.stringify({ name, msg: message }));
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <div id="name-controls">
        <input
          id="my-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div id="chat-controls" disabled={!name}>
        <input
          id="new-msg"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div id="chat-text" ref={chatTextRef}>
        {messages.map((msg, index) => (
          <div key={index}>
            <span className={msg.cls}>{msg.from}</span>: {msg.msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatApp;
import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

function App() {
  const [connectionMessage, setConnectionMessage] = useState("Waiting for a connection...");

  const [chatLog, setChatLog] = useState([]);
  const [message, setMessage] = useState("");
  const [typingMessage, setTypingMessage] = useState("");
  const [socket] = useState(() => io(':8000'));
  
  const [joined, setJoined] = useState(false);
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    return () => socket.disconnect(true);
  }, []);
  
  socket.on('connected', () => {
    setConnectionMessage("Welcome! Please enter a chat room code!")
  })

  socket.on('typing', typingMessage => {
    setTypingMessage(typingMessage);
  })

  socket.on('message', messageReceived => {
    setChatLog([...chatLog, messageReceived]);
  })

  const joinRoom = () => {
    // join the actual socket
    socket.emit('joinroom', roomName);
    setJoined(true);
  }

  const typingHandler = e => {
    socket.emit('typing', {
      room: roomName,
      message: `User ${socket.id} is typing...`
    });
    setMessage(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    socket.emit('typing', { room: roomName, message: ''});
    socket.emit('message', { room: roomName, message: message });
    setChatLog([...chatLog, message]);
    setMessage("");
  }

  return (
    <div className="App">
      {
        joined ?
        <>
        <ul>
          {
            chatLog.map((item, i) => <li key={i}>{item}</li>)
          }
        </ul>
        <span>{typingMessage}</span>
        <form onSubmit={ submitHandler }>
          <input type="text" onChange={ typingHandler } value={message}/>
          <input type="submit" value="Send Message"/>
        </form>
        </>
        :
        <>
        <h2>{ connectionMessage }</h2>
        <input type="text" onChange={ e => setRoomName(e.target.value) }/>
        <button onClick={ joinRoom }>Join</button>
        </>
      }
    </div>
  );
}

export default App;

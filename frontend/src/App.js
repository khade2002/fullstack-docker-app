import React, 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // You can create a basic App.css if you want

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Docker Compose creates a network where containers can talk to each other
    // using their service names as hostnames.
    // 'backend' is the service name from docker-compose.yml.
    // '5000' is the port the backend server is listening on inside the network.
    axios.get('http://backend:5000/api/data')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setMessage("Failed to load data from backend.");
      });
  }, []);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <header className="App-header">
        <h1>My AWS Deployed App</h1>
        <p>Message from backend: <strong>{message}</strong></p>
      </header>
    </div>
  );
}

export default App;

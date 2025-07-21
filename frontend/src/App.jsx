// frontend/src/App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import UserControl from './components/UserControl';
import Leaderboard from './components/Leaderboard';
import './index.css'; // Vite uses index.css by default

// The API URL now points to the proxy path
const API_URL = '/api';

function App() {
  const [users, setUsers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      // No need for the full URL, the proxy handles it!
      const usersRes = await axios.get(`${API_URL}/users`);
      const leaderboardRes = await axios.get(`${API_URL}/leaderboard`);
      setUsers(usersRes.data);
      setLeaderboard(leaderboardRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <header>
        <h1>Points Leaderboard Challenge</h1>
      </header>
      <main>
        <UserControl
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          onUpdate={fetchData}
        />
        <Leaderboard leaderboard={leaderboard} />
      </main>
    </div>
  );
}

export default App;
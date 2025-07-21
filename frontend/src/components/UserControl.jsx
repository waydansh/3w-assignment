// src/components/UserControl.js
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const UserControl = ({ users, selectedUser, setSelectedUser, onUpdate }) => {
    const [newUserName, setNewUserName] = useState('');
    const [message, setMessage] = useState('');

    const handleAddUser = async (e) => {
        e.preventDefault();
        if (!newUserName.trim()) return;
        try {
            await axios.post(`${API_URL}/users`, { name: newUserName });
            setNewUserName('');
            onUpdate(); // Refresh user list and leaderboard
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleClaimPoints = async () => {
        if (!selectedUser) {
            setMessage('Please select a user first!');
            return;
        }
        try {
            const res = await axios.post(`${API_URL}/claim`, { userId: selectedUser });
            setMessage(res.data.message);
            onUpdate(); // Refresh leaderboard
        } catch (error) {
            console.error('Error claiming points:', error);
            setMessage('Failed to claim points.');
        }
    };

    return (
        <div className="user-control">
            <h2>User Controls</h2>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="Enter new user name"
                />
                <button type="submit">Add User</button>
            </form>
            <hr />
            <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser || ''}>
                <option value="" disabled>-- Select a User --</option>
                {users.map(user => (
                    <option key={user._id} value={user._id}>{user.name}</option>
                ))}
            </select>
            <button onClick={handleClaimPoints} disabled={!selectedUser}>Claim Points</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default UserControl;
// src/components/UserControl.js
import React, { useState } from 'react';
import axios from 'axios';
import './UserControl.css';

const API_URL = '/api';

const UserControl = ({ users, selectedUser, setSelectedUser, onUpdate }) => {
    const [newUserName, setNewUserName] = useState('');
    const [message, setMessage] = useState('');
    const [isClaiming, setIsClaiming] = useState(false);

    const handleAddUser = async (e) => {
        e.preventDefault();
        if (!newUserName.trim()) return;
        try {
            await axios.post(`${API_URL}/users`, { name: newUserName });
            setNewUserName('');
            setMessage(`${newUserName} was added!`);
            onUpdate();
        } catch (error) {
            console.error('Error adding user:', error);
            setMessage('Error: User might already exist.');
        }
    };

    const handleClaimPoints = async () => {
        if (!selectedUser) {
            setMessage('Please select a user first!');
            return;
        }
        setIsClaiming(true);
        try {
            const res = await axios.post(`${API_URL}/claim`, { userId: selectedUser });
            setMessage(res.data.message);
            onUpdate();
        } catch (error) {
            console.error('Error claiming points:', error);
            setMessage('Failed to claim points.');
        } finally {
            setTimeout(() => setIsClaiming(false), 500); // Animation duration
        }
    };

    return (
        <div className="user-control-container">
            <h2>Player Hub</h2>
            <form onSubmit={handleAddUser} className="add-user-form">
                <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="Enter New Player Name"
                />
                <button type="submit">+ Add</button>
            </form>

            <div className="claim-section">
                <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser || ''}>
                    <option value="" disabled>-- Select a Player --</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                    ))}
                </select>
                <button
                    onClick={handleClaimPoints}
                    disabled={!selectedUser || isClaiming}
                    className={`claim-button ${isClaiming ? 'claiming' : ''}`}
                >
                    {isClaiming ? '🎉' : 'Claim Points'}
                </button>
            </div>
            {message && <p className="status-message">{message}</p>}
        </div>
    );
};

export default UserControl;
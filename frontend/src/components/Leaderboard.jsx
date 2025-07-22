// src/components/Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
    // Split the leaderboard into the top 3 and the rest
    const topThree = leaderboard.slice(0, 3);
    const theRest = leaderboard.slice(3);

    const rankIcons = ['🥇', '🥈', '🥉']; // Emojis for 1st, 2nd, 3rd

    return (
        <div className="leaderboard-container">
            <h2>🏆 Leaderboard</h2>

            {/* Top 3 Podium */}
            {topThree.length > 0 && (
                <div className="leaderboard-podium">
                    {topThree.map((user, index) => (
                        <div key={user._id} className={`podium-user rank-${index + 1}`}>
                            <div className="podium-avatar">
                                {/* Use a placeholder or user image */}
                                <img src={`https://i.pravatar.cc/150?u=${user._id}`} alt={user.name} />
                                <span className="podium-rank">{rankIcons[index]}</span>
                            </div>
                            <div className="podium-name">{user.name}</div>
                            <div className="podium-points">{user.totalPoints.toLocaleString()} PTS</div>
                        </div>
                    ))}
                </div>
            )}

            {/* The Rest of the List (Ranks 4+) */}
            <div className="leaderboard-list">
                {theRest.map((user, index) => (
                    <div key={user._id} className="list-item">
                        <span className="list-rank">{index + 4}</span>
                        <img className="list-avatar" src={`https://i.pravatar.cc/150?u=${user._id}`} alt={user.name} />
                        <span className="list-name">{user.name}</span>
                        <span className="list-points">{user.totalPoints.toLocaleString()} PTS</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
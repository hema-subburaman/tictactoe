import React from 'react';
import './Welcome.css';

const Welcome = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">
        Welcome to <span>Tic Tac Toe</span> Game
      </h1>
      <p className="welcome-subtext">A fun React game for all ages!</p>
      <button className="start-btn" onClick={onStart}>
        Start Now
      </button>
    </div>
  );
};

export default Welcome;

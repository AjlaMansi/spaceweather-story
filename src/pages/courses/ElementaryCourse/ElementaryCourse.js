import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ElementaryCourse.css';
import LevelUpModal from "./LevelUpModal"; // import the modal


const ElementaryCourse = ({ onLogout }) => {
  const navigate = useNavigate();

  const [showLevelUp, setShowLevelUp] = useState(false);

  const handleLogout = () => {
    if (onLogout) onLogout(); // clears user state
    navigate("/login"); // go back to login page
  };

  return (
    <div className="elementary-course">
      {/* Top Navigation Bar */}
      <nav className="course-nav">
        <div className="nav-left">
          <h2>🌟 Space Explorer Mission</h2>
        </div>
        <div className="nav-right">
          <button className="nav-btn logout" onClick={handleLogout}>
            🚪 Log Out
          </button>
          <button
            className="nav-btn levelup"
            onClick={() => setShowLevelUp(true)}
          >
            ⭐ Level Up
          </button>
        </div>
      </nav>

      {/* Course Content */}
      <header className="course-header">
        <p>
          Welcome young scientists! 🚀 Explore solar flares, CMEs, and learn how
          they affect our technology and daily life!
        </p>
      </header>

      <section className="course-topic">
        <h2>🌞 What is Space Weather?</h2>
        <p>
          Space weather comes from the Sun! It includes solar flares, CMEs, and
          the solar wind. These events can make auroras in the sky and sometimes
          affect our technology like GPS or radios!
        </p>
      </section>

      <section className="course-topic">
        <h2>☀️ The Sun’s Power</h2>
        <p>
          The Sun releases huge amounts of energy constantly. Sometimes it sends
          bursts called solar flares. Scientists study these to keep astronauts
          and satellites safe!
        </p>
      </section>

      <section className="course-topic">
        <h2>⚡ Coronal Mass Ejections (CMEs)</h2>
        <p>
          CMEs are like big storms from the Sun! When they reach Earth, they can
          create beautiful auroras, but also disturb satellites, GPS, and power
          grids. Let’s see how scientists track them! 🌌
        </p>
      </section>

      <section className="course-topic">
        <h2>🌈 Northern Lights and Space Magic</h2>
        <p>
          When the Sun’s energy hits Earth’s atmosphere, it creates dancing
          lights called auroras. They are amazing to see in the night sky! 🌟
        </p>
      </section>

      <section className="course-topic">
        <h2>💡 Fun Facts & Challenges!</h2>
        <ul>
          <li>
            Did you know that a strong solar storm could cause billions of
            dollars in damage?
          </li>
          <li>GPS satellites can be affected by space weather!</li>
          <li>
            Try observing the sky for auroras in safe areas during a solar
            storm!
          </li>
        </ul>
      </section>

      <footer className="course-footer">
        <button className="next-button">➡️ Next Adventure</button>
      </footer>
      {showLevelUp && (
        <LevelUpModal
          onClose={() => setShowLevelUp(false)}
          onLevelUp={() => {
            navigate("/middle");
          }}
        />
      )}
    </div>
  );
};

export default ElementaryCourse;

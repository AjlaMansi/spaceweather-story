import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LevelUpModal from "./LevelUpModal";
import "./MiddleSchoolCourse.css";
import { initSpaceGame } from "./SpaceGame/public/src/main-vanilla.js";

const MiddleSchoolCourse = ({ onLogout }) => {
  const [showLevelUp, setShowLevelUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Load CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/SpaceGame/src/style.css";
    document.head.appendChild(link);

    // Initialize the game directly
    initSpaceGame("game-container");

    return () => {
      document.head.removeChild(link);
    };
  }, []);


  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  return (
    <div className="middle-school-course">
      <nav className="course-nav">
        <div className="nav-left">
          <h2>🌌 Space Scientist Mission</h2>
        </div>
        <div className="nav-right">
          <button className="nav-btn logout" onClick={handleLogout}>
            🚪 Log Out
          </button>
          <button className="nav-btn" onClick={() => setShowLevelUp(true)}>
            🎓 Level Up
          </button>
        </div>
      </nav>

      <section
        id="spacegame-container"
        style={{ width: "100%", minHeight: "500px", position: "relative" }}
      >
        <div id="game-container"></div>
      </section>

      <header className="course-header">
        <p>
          Welcome young explorers! 🛰️ Learn about solar flares, CMEs, and how
          space weather affects satellites, astronauts, and technology on Earth!
        </p>
      </header>

      <section className="course-topic">
        <h2>☀️ Understanding Space Weather</h2>
        <p>
          Space weather refers to changes in the Sun's activity, like solar
          flares, CMEs, and the solar wind. These phenomena can create auroras,
          disrupt communication systems, and even affect power grids!
        </p>
      </section>

      <section className="course-topic">
        <h2>⚡ Solar Flares & CMEs</h2>
        <p>
          Solar flares are bursts of energy from the Sun. Coronal Mass Ejections
          (CMEs) are massive clouds of solar plasma. When these hit Earth, they
          can interfere with satellites, GPS, and radio communications.
        </p>
      </section>

      <section className="course-topic">
        <h2>🛰️ Space Weather in Action</h2>
        <p>
          Space weather can affect astronauts, satellites, and airlines. Pilots
          and engineers monitor solar storms carefully. Even GPS navigation can
          be disrupted! 🌍
        </p>
      </section>

      <section className="course-topic">
        <h2>🌈 Auroras and Natural Beauty</h2>
        <p>
          CMEs and solar winds interact with Earth's magnetic field creating
          auroras! Observing them safely can be a fun way to see space weather
          in action. 🌟
        </p>
      </section>

      <section className="course-topic">
        <h2>💡 Mini Challenges!</h2>
        <ul>
          <li>Track the current solar flare activity using NASA’s online tools.</li>
          <li>Research a historical space weather event and its impact on technology.</li>
          <li>Predict when auroras might be visible based on solar activity!</li>
        </ul>
      </section>

      <footer className="course-footer">
        <button className="next-button">➡️ Next Adventure</button>
      </footer>

      {showLevelUp && (
        <LevelUpModal
          onClose={() => setShowLevelUp(false)}
          onLevelUp={() => navigate("/highschool")}
        />
      )}
    </div>
  );
};

export default MiddleSchoolCourse;

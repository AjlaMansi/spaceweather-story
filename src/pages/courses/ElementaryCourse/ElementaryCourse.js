import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ElementaryCourse.css";
import LevelUpModal from "./LevelUpModal";

const ElementaryCourse = ({ onLogout }) => {
  const navigate = useNavigate();
  const [showLevelUp, setShowLevelUp] = useState(false);

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  // ✅ Inline CanvaEmbed component (no separate export)
  const CanvaEmbed = () => (
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "56.25%", // 16:9 ratio
          boxShadow: "0 2px 8px rgba(63,69,81,0.16)",
          margin: "1.6em 0 0.9em",
          overflow: "hidden",
          borderRadius: 8,
        }}
      >
        <iframe
          loading="lazy"
          src="https://www.canva.com/design/DAG051eSF8U/Sv1RhQFlSYNTxmvrcklstg/view?embed"
          allow="fullscreen"
          allowFullScreen
          title="Canva: White Gray Modern Pixel Dino Trivia Game Night Presentation"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            margin: 0,
            padding: 0,
          }}
        />
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "0.5em",
          fontFamily: "sans-serif",
          fontSize: "0.9em",
          color: "#555",
        }}
      >
        <a
          href="https://www.canva.com/design/DAG051eSF8U/Sv1RhQFlSYNTxmvrcklstg/view?utm_content=DAG051eSF8U&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2a7ae2", textDecoration: "none" }}
        >
    
        </a>{" "}
        
      </p>
    </div>
  );

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

      {/* ✅ Canva Game Embed */}
      <section className="course-embed">
        <CanvaEmbed />
      </section>

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
        <h2>☀ The Sun’s Power</h2>
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
        <button className="next-button">➡ Next Adventure</button>
      </footer>

      {showLevelUp && (
        <LevelUpModal
          onClose={() => setShowLevelUp(false)}
          onLevelUp={() => navigate("/middle")}
        />
      )}
    </div>
  );
};

export default ElementaryCourse;
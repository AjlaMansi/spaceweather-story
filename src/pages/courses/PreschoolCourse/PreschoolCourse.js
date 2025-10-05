import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PreschoolCourse.css";
import LevelUpModal from "./LevelUpModal";

const PreschoolCourse = ({ onLogout }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const handleStart = () => {
    setStarted(true);
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleReplay = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleLogout = () => {
    if (onLogout) onLogout(); // clears user state in App.js
    navigate("/login"); // navigate to login page
  };

  return (
    <div className="preschool-course">
      {/* Top Navigation Bar */}
      <nav className="course-nav">
        <div className="nav-left">
          <h2>🌟 Little Space Adventurers</h2>
        </div>
        <div className="nav-right">
          <button className="nav-btn logout" onClick={handleLogout}>
            🚪 Log Out
          </button>
          <button
            className="nav-btn level-up"
            onClick={() => setShowLevelUp(true)}
          >
            🪐 Level Up
          </button>
        </div>
      </nav>

      {/* Video Section */}
      <section className="video-section">
        <video
          ref={videoRef}
          className="course-video"
          width="600"
          src="/videos/StoryBookPreschool.mp4"
          type="video/mp4"
          controls={false}
        />
        <div className="video-controls">
          {!started ? (
            <button className="start-btn" onClick={handleStart}>
              🎬 Start Adventure
            </button>
          ) : (
            <>
              {isPlaying ? (
                <button className="stop-btn" onClick={handleStop}>
                  ⏸ Stop
                </button>
              ) : (
                <button className="start-btn" onClick={handleStart}>
                  ▶️ Resume
                </button>
              )}
              <button className="replay-btn" onClick={handleReplay}>
                🔁 Replay
              </button>
            </>
          )}
        </div>
      </section>

      {/* Course Info */}
      <section className="course-topic">
        <h2>🌞 What is Space Weather?</h2>
        <p>
          Space weather is like the Sun sending us messages! Sometimes it sends
          light, sometimes big bursts of energy called solar flares or storms.
          They can make the sky sparkle with colors called auroras! 🌈
        </p>
      </section>

      <section className="course-topic">
        <h2>☀️ Meet the Sun!</h2>
        <p>
          The Sun is 93 million miles away, but it can affect our lives. It
          keeps us warm and helps plants grow! Sometimes it sends extra energy
          our way called a solar flare. Let’s see what happens when it reaches
          Earth! 🌍
        </p>
      </section>

      <section className="course-topic">
        <h2>⚡ Fun with Stormy the CME</h2>
        <p>
          A CME is a big storm from the Sun. It can make pretty lights in the
          sky, but sometimes it can play tricks with our radios and computers.
          Let’s watch Stormy’s adventure! 🌟
        </p>
      </section>

      <section className="course-topic">
        <h2>🌈 Aurora Magic!</h2>
        <p>
          When the Sun’s energy meets Earth’s sky, we can see dancing colors
          called auroras. They are like magic curtains in the sky! 🎨
        </p>
      </section>
      {showLevelUp && (
        <LevelUpModal
          onClose={() => setShowLevelUp(false)}
          onLevelUp={() => {
            navigate("/elementary");
          }}
        />
      )}
    </div>
  );
};

export default PreschoolCourse;

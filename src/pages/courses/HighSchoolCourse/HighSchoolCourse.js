import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LevelUpModal from "./LevelUpModal";
import AdvancedCourseModal from "./AdvancedCourseModal";
import "./HighSchoolCourse.css";

const HighSchoolCourse = ({ onLogout }) => {
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showAdvancedModal, setShowAdvancedModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  return (
    <div className="high-school-course">
      {/* Top Navigation */}
      <nav className="course-nav">
        <div className="nav-left">
          <h2>🚀 Advanced Space Weather Mission</h2>
        </div>
        <div className="nav-right">
          <button className="nav-btn" onClick={() => setShowLevelUp(true)}>
            🎓 Level Up
          </button>
          <button className="nav-btn logout" onClick={handleLogout}>
            🚪 Log Out
          </button>
        </div>
      </nav>
      {/* Course Header */}
      <header className="course-header">
        <p>
          Welcome future space scientists! Learn how solar activity influences
          satellites, astronauts, aviation, and Earth’s technology systems.
        </p>
      </header>

      {/* Course Topics */}
      <section className="course-topic">
        <h2>☀️ Space Weather Fundamentals</h2>
        <p>
          Space weather includes solar flares, coronal mass ejections (CMEs),
          solar wind, and particle events. These phenomena interact with Earth's
          magnetic field, affecting communication, navigation, and power
          systems.
        </p>
      </section>

      <section className="course-topic">
        <h2>⚡ Solar Flares and CMEs in Detail</h2>
        <p>
          Solar flares are sudden releases of energy from the Sun. CMEs are
          massive bursts of plasma. When directed toward Earth, they can disrupt
          satellites, GPS, radio communications, and even electrical grids.
          Understanding their behavior is crucial for mitigating risks.
        </p>
      </section>

      <section className="course-topic">
        <h2>🛰️ Real-World Impacts</h2>
        <ul>
          <li>Satellite damage or temporary shutdowns</li>
          <li>Aviation communication disruptions, especially near the poles</li>
          <li>GPS inaccuracies affecting navigation systems</li>
          <li>Power grid fluctuations causing blackouts</li>
        </ul>
      </section>

      <section className="course-topic">
        <h2>🌌 Observing Auroras</h2>
        <p>
          Solar activity creates beautiful auroras when charged particles hit
          Earth's atmosphere. You can track solar storms online and predict when
          auroras might be visible. This is both scientific and visually
          exciting!
        </p>
      </section>

      <section className="course-topic">
        <h2>💡 Mini Exercises</h2>
        <ul>
          <li>Research a recent solar storm and its effects on Earth.</li>
          <li>Use NASA’s space weather data to predict aurora visibility.</li>
          <li>
            Discuss how technology-dependent industries prepare for space
            weather events.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="course-footer">
        <button className="next-button">➡️ Next Adventure</button>
      </footer>

      {/* Level Up Modal */}
      {showLevelUp && (
        <LevelUpModal
          onClose={() => setShowLevelUp(false)}
          onPassed={() => {
            setShowLevelUp(false);
            setShowAdvancedModal(true);
          }}
        />
      )}

      {/* Advanced Course Modal */}
      {showAdvancedModal && (
        <AdvancedCourseModal
          onClose={() => setShowAdvancedModal(false)}
          onSubscribe={() => navigate("/advanced")}
        />
      )}
    </div>
  );
};

export default HighSchoolCourse;

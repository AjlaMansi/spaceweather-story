// src/pages/courses/HighSchoolCourse/AdvancedCourseModal.jsx
import React from "react";
import "./AdvancedCourseModal.css";

const AdvancedCourseModal = ({ onClose, onSubscribe }) => {
  return (
    <div className="advanced-modal-overlay">
      <div className="advanced-modal">
        <h2>🎉 Congratulations!</h2>
        <p>
          You have completed the High School course! You can now unlock the 
          <strong> Cosmic Explorers Advanced Program </strong> to dive deeper into space science! 🚀
        </p>

        <div className="advanced-modal-buttons">
          <button className="subscribe-btn" onClick={onSubscribe}>
            🌌 Subscribe to Advanced Program
          </button>
          <button className="close-btn" onClick={onClose}>
            ✖️ Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCourseModal;

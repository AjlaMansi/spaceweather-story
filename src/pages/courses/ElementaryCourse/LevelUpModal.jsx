// src/pages/courses/ElementaryCourse/LevelUpModal.jsx
import React, { useState } from "react";
import "./LevelUpModal.css";

const LevelUpModal = ({ onClose, onLevelUp }) => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Flexible answers
    const q1Valid = ["sun", "the sun"];
    const q2Valid = ["auroras", "northern lights", "aurora"];
    const q3Valid = ["cme", "coronal mass ejection"];

    if (
      q1Valid.includes(answers.q1.trim().toLowerCase()) &&
      q2Valid.includes(answers.q2.trim().toLowerCase()) &&
      q3Valid.includes(answers.q3.trim().toLowerCase())
    ) {
      onLevelUp();
    } else {
      setError("Oops! Some answers are not correct. Try again! 🌟");
    }
  };

  return (
    <div className="levelup-overlay">
      <div className="levelup-modal">
        <h2>🎓 Level Up Test!</h2>
        <p>Answer these questions to advance to the next adventure! 🚀</p>

        <div className="question">
          <label>1️⃣ What star is the source of space weather?</label>
          <input
            type="text"
            name="q1"
            value={answers.q1}
            onChange={handleChange}
          />
        </div>

        <div className="question">
          <label>2️⃣ What lights can we see in the sky when solar storms hit Earth?</label>
          <input
            type="text"
            name="q2"
            value={answers.q2}
            onChange={handleChange}
          />
        </div>

        <div className="question">
          <label>3️⃣ What is a big storm from the Sun called?</label>
          <input
            type="text"
            name="q3"
            value={answers.q3}
            onChange={handleChange}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div className="levelup-buttons">
          <button onClick={handleSubmit}>🚀 Submit</button>
          <button onClick={onClose} className="close-btn">
            ✖️ Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelUpModal;

// LevelUpModal.jsx
import React, { useState } from "react";
import "./LevelUpModal.css";

const LevelUpModal = ({ onClose, onLevelUp }) => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // simple check: all correct
    if (answers.q1 === "b" && answers.q2 === "a" && answers.q3 === "c") {
      onLevelUp(); // navigate to ElementaryCourse
    } else {
      alert("Oops! Try again!");
    }
  };

  return (
    <div className="levelup-overlay">
      <div className="levelup-modal">
        <h2>🎓 Level Up Test!</h2>
        
        <div className="question">
          <p>1. What planet do we live on?</p>
          <label><input type="radio" name="q1" value="a" onChange={handleChange}/> Mars</label>
          <label><input type="radio" name="q1" value="b" onChange={handleChange}/> Earth</label>
          <label><input type="radio" name="q1" value="c" onChange={handleChange}/> Jupiter</label>
        </div>

        <div className="question">
          <p>2. What is the Sun?</p>
          <label><input type="radio" name="q2" value="a" onChange={handleChange}/> A star</label>
          <label><input type="radio" name="q2" value="b" onChange={handleChange}/> A planet</label>
        </div>

        <div className="question">
          <p>3. What colors appear in the aurora?</p>
          <label><input type="radio" name="q3" value="a" onChange={handleChange}/> Black</label>
          <label><input type="radio" name="q3" value="b" onChange={handleChange}/> Grey</label>
          <label><input type="radio" name="q3" value="c" onChange={handleChange}/> Green, Pink, Purple</label>
        </div>

        <div className="modal-buttons">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LevelUpModal;

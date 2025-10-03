import React from 'react';
import './MiddleSchoolCourse.css';

const MiddleSchoolCourse = () => {
  return (
    <div className="middle-school-course">
      <header className="course-header">
        <h1>🌌 Space Scientist Mission</h1>
        <p>Welcome young explorers! 🛰️ Learn about solar flares, CMEs, and how space weather affects satellites, astronauts, and technology on Earth!</p>
      </header>

      <section className="course-topic">
        <h2>☀️ Understanding Space Weather</h2>
        <p>
          Space weather refers to changes in the Sun's activity, like solar flares, CMEs, and the solar wind. These phenomena can create auroras, disrupt communication systems, and even affect power grids!
        </p>
      </section>

      <section className="course-topic">
        <h2>⚡ Solar Flares & CMEs</h2>
        <p>
          Solar flares are bursts of energy from the Sun. Coronal Mass Ejections (CMEs) are massive clouds of solar plasma. When these hit Earth, they can interfere with satellites, GPS, and radio communications.
        </p>
      </section>

      <section className="course-topic">
        <h2>🛰️ Space Weather in Action</h2>
        <p>
          Space weather can affect astronauts, satellites, and airlines. Pilots and engineers monitor solar storms carefully. Even GPS navigation can be disrupted! 🌍
        </p>
      </section>

      <section className="course-topic">
        <h2>🌈 Auroras and Natural Beauty</h2>
        <p>
          CMEs and solar winds interact with Earth's magnetic field creating auroras! Observing them safely can be a fun way to see space weather in action. 🌟
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
    </div>
  );
};

export default MiddleSchoolCourse;

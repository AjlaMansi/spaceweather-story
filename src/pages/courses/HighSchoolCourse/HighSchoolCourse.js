import React from 'react';
import './HighSchoolCourse.css';

const HighSchoolCourse = () => {
  return (
    <div className="high-school-course">
      <header className="course-header">
        <h1>🚀 Advanced Space Weather Mission</h1>
        <p>Welcome future space scientists! Learn how solar activity influences satellites, astronauts, aviation, and Earth’s technology systems.</p>
      </header>

      <section className="course-topic">
        <h2>☀️ Space Weather Fundamentals</h2>
        <p>
          Space weather includes solar flares, coronal mass ejections (CMEs), solar wind, and particle events. These phenomena interact with Earth's magnetic field, affecting communication, navigation, and power systems.
        </p>
      </section>

      <section className="course-topic">
        <h2>⚡ Solar Flares and CMEs in Detail</h2>
        <p>
          Solar flares are sudden releases of energy from the Sun. CMEs are massive bursts of plasma. When directed toward Earth, they can disrupt satellites, GPS, radio communications, and even electrical grids. Understanding their behavior is crucial for mitigating risks.
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
          Solar activity creates beautiful auroras when charged particles hit Earth's atmosphere. You can track solar storms online and predict when auroras might be visible. This is both scientific and visually exciting!
        </p>
      </section>

      <section className="course-topic">
        <h2>💡 Mini Exercises</h2>
        <ul>
          <li>Research a recent solar storm and its effects on Earth.</li>
          <li>Use NASA’s space weather data to predict aurora visibility.</li>
          <li>Discuss how technology-dependent industries prepare for space weather events.</li>
        </ul>
      </section>

      <footer className="course-footer">
        <button className="next-button">➡️ Next Adventure</button>
      </footer>
    </div>
  );
};

export default HighSchoolCourse;

import React from 'react';
import './PreschoolCourse.css';

const PreschoolCourse = () => {
  return (
    <div className="preschool-course">
      <header className="course-header">
        <h1>🧪 Little Space Adventurers</h1>
        <p>Welcome young astronauts! 🚀 Let’s explore the Sun, space storms, and colorful auroras!</p>
      </header>

      <section className="course-topic">
        <h2>🌞 What is Space Weather?</h2>
        <p>
          Space weather is like the Sun sending us messages! Sometimes it sends light, sometimes big bursts of energy called solar flares or storms. They can make the sky sparkle with colors called auroras! 🌈
        </p>
      </section>

      <section className="course-topic">
        <h2>☀️ Meet the Sun!</h2>
        <p>
          The Sun is 93 million miles away, but it can affect our lives. It keeps us warm and helps plants grow! Sometimes it sends extra energy our way called a solar flare. Let’s see what happens when it reaches Earth! 🌍
        </p>
      </section>

      <section className="course-topic">
        <h2>⚡ Fun with Stormy the CME</h2>
        <p>
          A CME is a big storm from the Sun. It can make pretty lights in the sky, but sometimes it can play tricks with our radios and computers. Let’s watch Stormy’s adventure! 🌟
        </p>
      </section>

      <section className="course-topic">
        <h2>🌈 Aurora Magic!</h2>
        <p>
          When the Sun’s energy meets Earth’s sky, we can see dancing colors called auroras. They are like magic curtains in the sky! 🎨
        </p>
      </section>

      <footer className="course-footer">
        <button className="next-button">➡️ Next Adventure</button>
      </footer>
    </div>
  );
};

export default PreschoolCourse;

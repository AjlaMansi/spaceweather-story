import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // we'll create this later

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1>🌌 Welcome to SpaceWeather Adventures!</h1>
        <p>Choose your guide and explore the magic of space weather!</p>
      </header>

      <section className="home-cta">
        <Link to="/characters">
          <button className="start-button">🚀 Start Your Adventure</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

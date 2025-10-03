import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../../components/LoginModal';
import './Home.css';

const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (userData) => {
  console.log('Logged in user:', userData); // For now we log the data
  setUser(userData);
  navigate('/characters');
};

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>🌌 Welcome to SpaceWeather Adventures!</h1>
        <p>Choose your guide and explore the magic of space weather!</p>
      </header>

      <section className="home-cta">
        <button className="start-button" onClick={() => setLoginOpen(true)}>
          🚀 Start Your Adventure
        </button>
      </section>

      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
};

export default Home;

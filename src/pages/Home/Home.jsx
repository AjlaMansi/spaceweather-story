import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../../components/LoginModal';
import './Home.css';

const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (userData) => {
  console.log('Logged in user:', userData);
  setUser(userData);

  const age = Number(userData.childAge);
  if (age >= 3 && age <= 5) navigate("/preschool");
  else if (age >= 6 && age <= 11) navigate("/elementary");
  else if (age >= 12 && age <= 15) navigate("/middle");
  else navigate("/highschool");
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

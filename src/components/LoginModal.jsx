import React, { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [mode, setMode] = useState("login"); // 'login' or 'signup'
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
  if (mode === "login") {
    if (!username || !password)
      return alert("Please enter username and password");
    onLogin({ username, parentName, childName, childAge: Number(childAge), email, location });
    onClose && onClose();
  } else {
    if (!parentName || !childName || !childAge || !username || !password || !email)
      return alert("Please fill in all required fields for sign up");
    onLogin({ username, parentName, childName, childAge: Number(childAge), email, location });
    onClose && onClose();
  }
};


  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{mode === "login" ? "👩‍🚀 Sign In" : "📝 Sign Up"}</h2>

        {mode === "signup" && (
          <>
            <input
              type="text"
              placeholder="Parent's Name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Child's Name"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Child's Age"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
            />
            <input
              type="email"
              placeholder="Parent's Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location (optional)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {mode === "login" ? "Login" : "Sign Up"}
        </button>

        <p className="switch-mode">
          {mode === "login" ? (
            <>
              No account?{" "}
              <span
                onClick={() => setMode("signup")}
                style={{ cursor: "pointer", color: "#ffcc00" }}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                style={{ cursor: "pointer", color: "#ffcc00" }}
              >
                Log In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../api";
import "../../components/LoginModal.css";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    try {
      if (mode === "login") {
        if (!username || !password) return alert("Please enter username and password");
        const user = await loginUser(username, password);
        onLogin(user);
        navigate("/"); // ✅ redirect to appropriate course
      } else {
        if (!parentName || !childName || !childAge || !username || !password || !email)
          return alert("Please fill in all required fields for sign up");

        const newUser = await registerUser({
          username,
          password,
          parentName,
          childName,
          childAge: Number(childAge),
          email,
          location,
        });

        onLogin(newUser);
        navigate("/"); // ✅ redirect after signup
      }
    } catch (err) {
      alert(err || "Something went wrong, try again!");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
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

export default LoginPage;

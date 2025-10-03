import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import GuestCourse from "./pages/courses/GuestCourse/GuestCourse";
import PreschoolCourse from "./pages/courses/PreschoolCourse/PreschoolCourse";
import ElementaryCourse from "./pages/courses/ElementaryCourse/ElementaryCourse";
import MiddleSchoolCourse from "./pages/courses/MiddleSchoolCourse/MiddleSchoolCourse";
import HighSchoolCourse from "./pages/courses/HighSchoolCourse/HighSchoolCourse";
import LoginModal from "./components/LoginModal";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (userData) => {
    setUser(userData); // includes childAge, parentName, username, etc.
    setShowLogin(false);
  };

  const getCoursePage = () => {
    if (!user) return <GuestCourse />;
    const age = Number(user.childAge);
    if (age >= 3 && age <= 5) return <PreschoolCourse />;
    if (age >= 6 && age <= 11) return <ElementaryCourse />;
    if (age >= 12 && age <= 15) return <MiddleSchoolCourse />;
    if (age > 15) return <HighSchoolCourse />;
  };

  return (
    <Router>
      {showLogin && (
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
      {!showLogin && (
        <Routes>
          <Route path="/" element={getCoursePage()} />
          <Route path="/guest" element={<GuestCourse />} />
          <Route path="/preschool" element={<PreschoolCourse />} />
          <Route path="/elementary" element={<ElementaryCourse />} />
          <Route path="/middle" element={<MiddleSchoolCourse />} />
          <Route path="/highschool" element={<HighSchoolCourse />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;

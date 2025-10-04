import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import GuestCourse from "./pages/courses/GuestCourse/GuestCourse";
import PreschoolCourse from "./pages/courses/PreschoolCourse/PreschoolCourse";
import ElementaryCourse from "./pages/courses/ElementaryCourse/ElementaryCourse";
import MiddleSchoolCourse from "./pages/courses/MiddleSchoolCourse/MiddleSchoolCourse";
import HighSchoolCourse from "./pages/courses/HighSchoolCourse/HighSchoolCourse";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => setUser(null);

  const getCoursePage = () => {
    if (!user) return <Navigate to="/login" />; 
    const age = Number(user.childAge);
    if (age >= 3 && age <= 5) return <PreschoolCourse onLogout={handleLogout} />;
    if (age >= 6 && age <= 11) return <ElementaryCourse onLogout={handleLogout} />;
    if (age >= 12 && age <= 15) return <MiddleSchoolCourse onLogout={handleLogout} />;
    if (age > 15) return <HighSchoolCourse onLogout={handleLogout} />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage onLogin={setUser} />} />
        <Route path="/" element={getCoursePage()} />
        <Route path="/guest" element={<GuestCourse />} />
        <Route path="/preschool" element={<PreschoolCourse onLogout={handleLogout} />} />
        <Route path="/elementary" element={<ElementaryCourse onLogout={handleLogout} />} />
        <Route path="/middle" element={<MiddleSchoolCourse onLogout={handleLogout} />} />
        <Route path="/highschool" element={<HighSchoolCourse onLogout={handleLogout} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

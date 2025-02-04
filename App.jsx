import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import InstructorDashboard from "./pages/InstructorDashboard";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import AddCourse from "./components/AddCourse";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/course/:id" element={<CoursePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/InstructorDash/:id" element={<InstructorDashboard />} />
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

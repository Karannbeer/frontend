import React from "react";
import Navbar from "../components/Navbar";
import CourseList from "../container/CourseList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <h1>Welcome to Course Management</h1>
      </div>
      <CourseList />
    </div>
  );
};

export default Home;

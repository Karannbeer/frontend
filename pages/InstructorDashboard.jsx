import React from "react";
import "./InstructorDash.css";
import CTAButton from "../components/CTAButton";
const InstructorDashboard = () => {
  return (
    <div className="inst">
      <div className="courseBtn">
        <CTAButton linkto={"/addcourse"} active={true}>
          Add Course
        </CTAButton>
        <CTAButton linkto={"/getAllCourses"} active={false}>
          View Courses
        </CTAButton>
        {/* <button type="button" className="btn btn-dark">
          Add Course
        </button>
        <button type="button" className="btn btn-dark">
          View All Course
        </button> */}
      </div>
      <div className="courseContent">
        <h1>Course List</h1>
      </div>
    </div>
  );
};

export default InstructorDashboard;

import React from "react";
import "./CourseCard.css";

const CourseCard = ({ title, description, link, instructor }) => {
  // Extract instructor's name safely
  const instructorName =
    instructor?.user?.firstName && instructor?.user?.lastName
      ? `${instructor.user.firstName} ${instructor.user.lastName}`
      : "Unknown Instructor";

  return (
    <div className="card ccard" style={{ width: "18rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title || "Untitled Course"}</h5>
        <p className="card-text">
          {description || "No description available."}
        </p>
        <p className="card-text">
          <strong>Instructor:</strong> {instructorName}
        </p>
        <a href={link} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CourseCard;

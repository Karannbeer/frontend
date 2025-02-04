import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoursePage = () => {
  const { id } = useParams(); // Get course ID from URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const [enrollMessage, setEnrollMessage] = useState("");

  // Simulated logged-in user ID (Replace with actual user ID from auth)
  const userId = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cms/api/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(
          error.response?.data?.message || "Failed to fetch course details"
        );
        setLoading(false);
      });
  }, [id]);

  const handleEnroll = async () => {
    setEnrolling(true);
    setEnrollMessage("");

    const enrollmentData = {
      student: { id: userId },
      course: { id: parseInt(id) },
      enrollmentDate: new Date().toISOString(),
    };

    try {
      await axios.post(
        `http://localhost:8080/cms/api/enrollments`,
        enrollmentData
      );
      setEnrollMessage("Successfully enrolled in the course!");
    } catch (error) {
      setEnrollMessage(
        error.response?.data?.message || "Error enrolling in the course."
      );
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) return <p>Loading course details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!course) return <h2>Course not found!</h2>;

  const instructorName =
    course.instructor?.user?.firstName && course.instructor?.user?.lastName
      ? `${course.instructor.user.firstName} ${course.instructor.user.lastName}`
      : "Unknown Instructor";

  return (
    <div>
      <h2>{course.courseName}</h2>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Instructor:</strong> {instructorName}
      </p>
      <p>
        <strong>Expertise:</strong>{" "}
        {course.instructor?.expertise || "Not provided"}
      </p>
      <p>
        <strong>Qualification:</strong>{" "}
        {course.instructor?.qualification || "Not available"}
      </p>
      <p>
        <strong>Bio:</strong> {course.instructor?.bio || "No bio available"}
      </p>

      <button onClick={handleEnroll} disabled={enrolling}>
        {enrolling ? "Enrolling..." : "Enroll in Course"}
      </button>

      {enrollMessage && <p>{enrollMessage}</p>}
    </div>
  );
};

export default CoursePage;

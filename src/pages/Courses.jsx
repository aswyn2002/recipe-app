import React from "react";
import CourseList from "../components/CoursesPageComponents/CourseList";

const CoursesPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 font-poppins">Available Courses</h1>
      <CourseList /> 
    </div>
  );
};

export default CoursesPage;

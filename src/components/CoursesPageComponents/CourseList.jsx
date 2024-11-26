import React from "react";
import CourseCard from "../CoursesPageComponents/CourseCard";
import recipeCourses from "../../data/courseData";

const CourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipeCourses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseList;

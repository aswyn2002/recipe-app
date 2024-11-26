import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">{course.title}</h2>
      <p className="mb-4">{course.description}</p>

      {course.youtubeLink && (
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src={course.youtubeLink.replace("watch?v=", "embed/")}
            title={course.title}
            className="w-full h-full rounded-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default CourseCard;

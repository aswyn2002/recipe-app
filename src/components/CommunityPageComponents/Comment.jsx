import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-start space-x-2 text-gray-700">
      <span className="font-semibold">{comment.user}:</span>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;

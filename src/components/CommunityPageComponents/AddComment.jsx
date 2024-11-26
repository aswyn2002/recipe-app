import React, { useState } from "react";

const AddComment = ({ postId, handleComment }) => {
  const [commentText, setCommentText] = useState("");

  const onSubmitComment = () => {
    if (commentText.trim()) {
      handleComment(postId, commentText);
      setCommentText(""); 
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Add a comment..."
        className="w-1/2 p-2 border border-gray-300 rounded-md"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmitComment();
        }}
      />
    </div>
  );
};

export default AddComment;

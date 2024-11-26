import React from "react";
import Comment from "../CommunityPageComponents/Comment";
import AddComment from "../CommunityPageComponents/AddComment";

const Post = ({ post, handleLike, handleComment }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-md shadow-sm">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <img
          src={post.photo}
          alt={post.user}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <h4 className="font-semibold font-poppins">{post.user}</h4>
      </div>

      {/* Content */}
      <p className="mb-3 font-poppins">{post.content}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className=" h-64 object-cover rounded-md mb-3"
        />
      )}

      {/* Actions */}
      <div className="flex items-center space-x-12 text-gray-600">
        <button
          onClick={() => handleLike(post.id)}
          className="flex items-center space-x-2 hover:text-red-500"
        >
          <span>❤️</span>
          <span>{post.likes}</span>
        </button>
        <button className="text-sm hover:text-primary">
          {post.comments.length} Comments
        </button>
      </div>

      {/* Comments */}
      <div className="mt-4 space-y-2">
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      {/* Add a Comment */}
      <AddComment postId={post.id} handleComment={handleComment} />
    </div>
  );
};

export default Post;

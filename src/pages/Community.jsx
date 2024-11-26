import React, { useState } from "react";
import Post from "../components/CommunityPageComponents/Post";
import communityData from "../data/communityData";

const Community = () => {
  const [posts, setPosts] = useState(communityData);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId, commentText) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), user: "You", text: commentText },
              ],
            }
          : post
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 font-poppins">Community</h1>

      {/* Posts Section */}
      <div className="space-y-8">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            handleLike={handleLike}
            handleComment={handleComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;

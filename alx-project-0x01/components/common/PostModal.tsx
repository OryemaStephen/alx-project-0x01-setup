import { PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState({
    userId: 1,
    title: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>

        <form onSubmit={handleSumbit}>
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-gray-700 font-medium mb-2"
            >
              {" "}
              User ID
            </label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-gray-700 font-medium mb-2"
            >
              Body
            </label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
              rows={4}
            />
          </div>
          <div className="flex justify-between items-center">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-600 focus:outline-none">
                Cancel
            </button>
             <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;

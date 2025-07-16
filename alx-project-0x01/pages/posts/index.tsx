import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps, PostsPageProps } from "@/interfaces";
import React, { useState } from "react";

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button onClick={()=>setIsModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts?.map((post: PostProps) => (
            <PostCard
              title={post.title}
              key={post.id}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </main>
      {
        isModalOpen && (
            <PostModal onSubmit={handleAddPost} onClose={()=>setIsModalOpen(false)} />
        )
      }
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;

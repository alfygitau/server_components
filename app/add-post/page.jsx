"use client";

import { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[80%] mx-auto mt-[100px]">
      <h1>Add post</h1>
      <form className="w-[60%]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[10px] mt-[20px]">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="h-[40px] px-[10px] text-[#000] focus:outline-none w-[70%]"
          />
        </div>
        <div className="flex flex-col gap-[10px] mt-[20px]">
          <label htmlFor="title">Content</label>
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
            className="h-[120px] px-[10px] text-[#000] focus:outline-none w-[70%]"
          />
        </div>
        <button
          type="submit"
          className="h-[50px] bg-[#0000ff] px-[20px] mt-[20px] rounded-[5px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Task Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Task Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button className="bg-green-600 px-8 py-2 text-white font-bold w-fit">
        Add Task
      </button>
    </form>
  );
}

export default AddTopic;

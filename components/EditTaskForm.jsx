"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
function EditTaskForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify({ newTitle, newDescription }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to update task");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Task Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Task Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button className="bg-green-600 px-8 py-2 text-white font-bold w-fit">
        Update Task
      </button>
    </form>
  );
}

export default EditTaskForm;

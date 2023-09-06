import EditTaskForm from "@/components/EditTaskForm";

const getTaskById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch task");
    return response.json();
  } catch (error) {
    console.log("Error loading task", error);
  }
};

async function EditTask({ params }) {
  const { id } = params;
  const { task } = await getTaskById(id);
  const { title, description } = task;
  return <EditTaskForm id={id} title={title} description={description} />;
}

export default EditTask;

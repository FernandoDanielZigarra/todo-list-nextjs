"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

function RemoveBtn({ id }) {
  const router = useRouter();
  const handleDeleted = async () => {
    const confirmed = confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      const response = await fetch(`http://localhost:3000/api/tasks?id=${id}`, {
        method: "DELETE",
      });
      if(response.ok){
        router.refresh()
      }
      
    }
  };
  return (
    <button onClick={handleDeleted} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveBtn;

import Link from "next/link";

function Navbar() {
  return(
   <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 ">
    <Link href={"/"} className="font-bold text-white">Todo List</Link>
    <Link href={"/addTask"} className="bg-white p-2">Add Task</Link>
   </nav>
)
}

export default Navbar;

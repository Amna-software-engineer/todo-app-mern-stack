import { MdModeEditOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  // const [isChecked, setIsChecked] = useState(false)
  const [todos, setTodos] = useState([])
   const navigate = useNavigate();
  
  // Fetching data from the backend
  const getData = async () => {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();
    // console.log("result", result.todos);
    setTodos(result.todos);
  }
  // Fetching data when the component mounts
  useEffect(() => {
    getData();
  }, [])
  // Deleting a todo
  const handleDelete = async (id) => {
    const response = await fetch("http://localhost:5000",
      {
        method: "DELETE", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id })
      });
    const result = await response.json();
    getData(); // Refresh the todo list after deletion
  }
// handle check
  const handleCheck= async (id) => {
     // Find the todo to get its current IsChecked value
     const todo= todos.find(todo=>(todo._id===id))
     const updatedIsChecked = !todo.IsChecked; // Toggle
    const response = await fetch(`http://localhost:5000/edit-todo/${id}`,
      {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({IsChecked: updatedIsChecked })
      });
    const result = await response.json();
    getData(); // Refresh the todo list 
  }



  return (
    <div className=" flex flex-col px-20 bg-[#B3B7EE] h-screen">

      {
        todos.map((todo) => (
          <div className='bg-white w-full rounded-md py-4 px-4 mt-6' key={todo._id}>
            <h1 className='text-[#9395D3] text-xl font-bold'>{todo.title}</h1>
            <div className="flex justify-between items-center ">
              <p>{todo.description} </p>
              <div className="flex space-x-4 text-2xl text-[#9395D3] font-bold ">
                <MdModeEditOutline className="cursor-pointer" onClick={() => (navigate(`/edit-todo/${todo._id}`))} />
                <RiDeleteBin5Line className="cursor-pointer" onClick={() => (handleDelete(todo._id))} />
                {todo.IsChecked ? <FaRegCheckCircle className="cursor-pointer" onClick={()=> handleCheck(todo._id)}/> : <MdRadioButtonUnchecked className="cursor-pointer"  onClick={()=> handleCheck(todo._id)}/>
                }
              </div>
            </div>
          </div>
        ))

      }
    </div>
  )
}

export default TodoList
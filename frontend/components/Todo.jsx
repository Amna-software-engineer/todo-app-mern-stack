import { MdModeEditOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";


const Todo = () => {

  const [isChecked, setIsChecked] = useState(false)
  const [todo, setTodo] = useState({})
async function getData(){
  const response = await fetch("http://localhost:5000");
    const result = await response.json();
    console.log("result", result.todos);
    setTodo(result);
}
  useEffect( () => {
   getData(); 
    
  }, [])


  return (
    <div className='bg-white w-full rounded-md py-4 px-4'>
      <h1 className='text-[#9395D3] text-xl font-bold'>Todo Title</h1>
      <div className="flex justify-between items-center ">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eos odio numquam placeat </p>
        <div className="flex space-x-4 text-2xl text-[#9395D3] font-bold ">
          <MdModeEditOutline className="cursor-pointer" />
          <RiDeleteBin5Line className="cursor-pointer" />
          {isChecked ? <FaRegCheckCircle className="cursor-pointer" /> : <MdRadioButtonUnchecked className="cursor-pointer" />

          }
        </div>
      </div>
    </div>
  )
}

export default Todo
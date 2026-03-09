import { useState } from "react";
import { RiAddLargeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [create, setCreate] = useState(false);
const navigate = useNavigate();
  return (
    <nav className='bg-[#9395D3] text-white '>
      <ul className='px-20 py-4 flex justify-between items-center'>
        <li className='text-3xl font-bold'>TODO APP</li>
        <li className='text-3xl font-bold cursor-pointer flex justify-between items-center'>
         <RiAddLargeLine onClick={()=>navigate("/create-todo")}/> 
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
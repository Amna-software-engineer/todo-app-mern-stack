import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

   async function handleSubmit(e) {
    e.preventDefault();
    const data = { title, description };
    console.log(data);
    const response = await fetch("http://localhost:5000", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
   const result= await response.json();
console.log("result", result);
navigate("/");

    

  }
  return (
    <div className='flex items-center flex-col px-20 bg-white h-screen w-full max-w-lg mx-auto space-y-8 '>
      <h1 className='text-4xl font-bold mt-18 text-[#9395D3]'>ADD New Task</h1>
      <form className='text-xl text-[#8B8787] font-normal space-y-8 flex items-center justify-center flex-col  w-full' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Enter Title" name="title" className="bg-white border-b-2 px-2 py-1  focus:outline-0 w-full text-[#8B8787]" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Enter Description " name="description" className="bg-white  px-2 py-1 border-b-2 focus:outline-0 w-full text-[#8B8787]" onChange={(e) => setDescription(e.target.value)} />
        <button type="submit" className="rounded-md px-6 py-2  border-[2px]   bg-[#9395D3] text-white cursor-pointer w-full">Add Todo</button>
      </form>
    </div>
  )
}

export default CreateTodo
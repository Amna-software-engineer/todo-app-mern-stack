import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditTodo = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const [singleTodo, setSingleTodo] = useState({})
  const { id } = useParams();
  const UpdatedTodo = { title, description }
    const navigate = useNavigate();

  // getting the single todo
  const getSingleTodo = async () => {
    const response = await fetch(`http://localhost:5000/${id}`)
    const result = await response.json();
    // setSingleTodo(result.todo);
    setTitle(result.todo.title)
    setDescription(result.todo.description)
  }
  useEffect(() => {
    getSingleTodo()
  }, [])
  // handling the submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("UpdatedTodo",UpdatedTodo);
    const response = await fetch(`http://localhost:5000/edit-todo/${id}`, {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(UpdatedTodo)
    })
    const result = await response.json();
    console.log("result", result);
 navigate("/")
  }

  return (
    <div className='flex items-center flex-col px-20 bg-white h-screen w-full max-w-lg mx-auto space-y-8 '>
      <h1 className='text-4xl font-bold mt-18 text-[#9395D3]'>Edit Your Task</h1>
      <form className='text-xl text-[#8B8787] font-normal space-y-8 flex items-center justify-center flex-col  w-full' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="title" className="bg-white border-b-2 px-2 py-1  focus:outline-0 w-full text-[#8B8787]" onChange={(e) => setTitle(e.target.value)} value={title && title} />
        <input type="text" name="description" className="bg-white  px-2 py-1 border-b-2 focus:outline-0 w-full text-[#8B8787]" onChange={(e) => setDescription(e.target.value)} value={description && description} />
        <button type="submit" className="rounded-md px-6 py-2  border-[2px] bg-[#9395D3] text-white cursor-pointer w-full">Submit</button>
      </form>
    </div>
  )
}

export default EditTodo
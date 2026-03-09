import CreateTodo from "../components/CreateTodo"
import EditTodo from "../components/EditTodo"
import Navbar from "../components/Navbar"
import TodoList from "../components/TodoList"

import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
 

  return (
    <BrowserRouter > 
    <Navbar/>
    <Routes>
      <Route path="/" element={<TodoList/>}/>
      <Route path="/create-todo" element={<CreateTodo/>}/>
      <Route path="/edit-todo/:id" element={<EditTodo/>}/>
   

    </Routes>
    </BrowserRouter>
  )
}

export default App

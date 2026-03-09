const todos = require("../model/todos");
// creating todo
exports.CreataTodo = (req, res, next) => {
   const { title, description, IsChecked } = req.body;
   todos.create({ title, description, IsChecked })
      .then(todo => {
         console.log("todo created successfully", todo);
         res.status(201).json({ message: "todo created successfully", todo });
      })
      .catch(err => {
         console.log("error in creating todo", err);
      })

}
// getting all todos
exports.getTodos = (req, res, next) => {
   todos.find()
      .then(todos => {
         // console.log("todos fetched successfully", todos);
         res.status(200).json({ message: "todos fetched successfully", todos });
      }).catch(err => {
         console.log("error while fetching todos", err);
      })
}
exports.getSingleTodos = (req, res, next) => {
   const id = req.params.id;
   todos.findById({_id:id})
      .then(todo => {
         // console.log("todos fetched successfully", todos);
         res.status(200).json({ message: "todo fetched successfully", todo });
      }).catch(err => {
         console.log("error while fetching todos", err);
      })
}
// edidting todo
exports.EditTodo = (req, res, next) => {
   try {
      console.log(req.body);
      
      const { title, description, IsChecked } = req.body;
      const id= req.params.id;
      console.log(id);
      
      todos.findByIdAndUpdate(id,req.body, { new: true }).then(()=>{

         res.status(200).json({ message: "todo updated successfully" });
      })
      // console.log("todo updated successfully");

   } catch (err) {
      console.log("error while upadating todos", err);
   }
}

// deleting todo
exports.DeleteTodo = (req, res, next) => {
   try {
      const { _id} = req.body;
      todos.findByIdAndDelete( _id ).then(()=>{
         res.status(200).json({message:"todo Deleted succesfully"})
      })

   } catch (error) {
      console.log("error while Deleting todos", err);
   }
}

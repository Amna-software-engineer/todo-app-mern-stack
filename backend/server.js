const mongoose=require("mongoose");
const express= require('express');
const todos= require("./model/todos");
const todosRouter = require("./Routes/todosRouter");
const cors= require("cors");
const app = express();
const PORT =  5000;
const dotenv=require("dotenv");
dotenv.config();
const MONGODB_URL=process.env.MONGODB_URL;
app.use(express.json()); // hanlde form data



app.use(cors());

// app.use("/",(req,res)=>{
//     res.send("Hello World");})
app.use(todosRouter);

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("successfully connected to db");
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    })
})
.catch((err)=>{
    console.log("error while connecting to db",err);
    
})
    
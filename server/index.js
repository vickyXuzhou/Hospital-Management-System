const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const EmployeeModel = require("./models/user")
// const EmployeeModel = require("./models/user.js")
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://victory:victory@cluster0.4aerdmt.mongodb.net/Register?retryWrites=true&w=majority")

app.post("/register",(req,res)=>{
 EmployeeModel.create(req.body)  
 .then(employees=>res.json(employees)) 
 .catch(err=>res.json(err))
})
app.post("/login",(req,res)=>{
    const {email,password} = req.body
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
          res.json("No record exist")      
        }
    })
})
app.listen(3001, ()=>{
    console.log("server is running")
})
const mongoose=require('mongoose')

//now create schema for the database model

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
})

//now creating model

const userModel=mongoose.model("UsersTable",userSchema)
module.exports=userModel
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const userModle=require("./models/user")

//using const app = express(), you are setting up the foundation for building a web server using Express.js. 
//You can then use this app object to define your routes, handle HTTP requests,
//and configure various aspects of your web application.
const app=express()

//this will transfer the data from front end to backend as json format
app.use(express.json())

//used to enable Cross-Origin Resource Sharing (CORS) in an Express.js application. 
app.use(cors())


//creating connection to mongodb database named:loginsignup
mongoose.connect("mongodb://127.0.0.1:27017/loginsignup");


// const handleSubmit=(e)=>{
//     e.preventDefault()
//     //using axios to post the data
//     //Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser
//     axios.post('http://localhost:3001/signup',
//     {
//         userName,
//         email,
//         password
//     }
//     )
//     .then(result=>console.log(result))
//     .catch(err=>console.log(err))

// }
//back to the signup component, this code was connecting to the express by the  axios.post('http://localhost:3001/signup', but then we will
//rout the data passing by this code to the sarver side in express by the code given below

app.post('/login',(request,response)=>{
    const {email,password}=request.body;
    userModle.findOne({email:email})
    .then (user=>{
        if(user){
            if(user.password===password){
                response.json("Success");
            }
            else{
                response.json("Incorrect password! Try again.");
            }
           
            } 
            else{
                response.json("No user found. Signup now!");
        }
    })
})

// POST method is used to submit data to be processed to a specified resource.
//  It is often used to send data to a server to create or update a resource,
//   such as submitting form data or sending data to an API.
app.post('/signup',(request,response)=>{
    //now go and create a model my creating new folder and file named as model and use.js
    userModle.create(request.body)
    .then(UsersTable=>response.json(UsersTable))
    .catch(err=>response.json(err))
})

//running our sarver now
app.listen(3001,()=>{
    console.log("sarver is running")
})




// importing express framework into our file
const express=require("express")

// creating our application through express
const app = express();

// To convert client json objects into js
app.use(express.json());

// My application using my middlewares
app.use(myMiddleWare);

// creating middlewares
function myMiddleWare(req, res, next){
    console.log("Inside the middleware i created.")
    next();        // It will pass on the control to the next step
}

// stich Routes to the server
require("./ideaapproutes/idea.routes")(app);

// starting server for our application
app.listen(8080,()=>{
    console.log("Server started")
}) 

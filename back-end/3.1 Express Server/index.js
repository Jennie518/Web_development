import express  from "express";
const app = express();
const post = 3000;
app.listen(post,()=>{
    console.log(`Service running on port ${post}`);//call back function
})
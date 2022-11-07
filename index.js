const express = require('express');
const { connection } = require('./Config/db');
const { userRouter } = require('./Router/auth.router');
require("dotenv").config();
const cors = require("cors")

const app=express();
const port = process.env.PORT || 8000
app.use(cors());
app.use(express.json());

app.use("/auth",userRouter)

app.get("/",(req,res)=>{
    res.send("Welcome To Homepage")
})






app.listen(port,async()=>{
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
    console.log("port is running");
})
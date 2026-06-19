const express = require('express');
const router = require('./router/router');
const { connectDB } = require('./db');


const app = express();
connectDB();
app.use(express.json())
app.use("/",router);

app.listen(4000,()=>{
    console.log("running");
    
})
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"express","home.html"));
});
app.post("/form",(req,resp)=>{
    const data = req.body;
    console.log(data);
    resp.json(data);
});
app.listen(4000,()=>{
    console.log("running");
    
})


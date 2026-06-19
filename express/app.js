const express = require('express');

const app = express();
app.use(express.json());
app.get("/",(req,resp)=>{
    resp.end("home...");
});
app.post("/index",(req,resp)=>{
const data=req.body;
console.log(data);
resp.json(data);

});
app.listen(4000,()=>{
    console.log("running");
    
})
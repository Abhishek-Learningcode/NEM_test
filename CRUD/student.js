const mongoose = require('mongoose');
const { connectDB } = require('./db');

const empSchema =mongoose.Schema({
    rollno:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
},{timestamps:true}
)

const empModel =mongoose.model("student",empSchema);

connectDB();

async function insertEmp() {
    try {
        const data = new empModel({
            rollno:10,
            name:"abhi",
            email:"xyz",
            course:"cs"
        });
        const result= await data.save();
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}
insertEmp();



async function showData() {
  try {
      const result = await empModel.find();
      console.log(result);
      
  } catch (error) {
    console.log(error);
    
  }
}
  showData();

  async function deleteInfo() {
    try {
        const result = await empModel.deleteOne({name:"abhishek"});
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
  }
  deleteInfo();
  async function updataInfo() {
    try {
        const result = await empModel.updateOne({name:"abhi"},{$set:{rollno:34}});
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
  }
  updataInfo();

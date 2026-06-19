const { default: mongoose } = require("mongoose");

const empSchema = mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quqntity:{
        type:Number,
        required:true
    }
},{timestamps:true}
)

const empModel = mongoose.model("emp",empSchema);

module.exports=empModel;
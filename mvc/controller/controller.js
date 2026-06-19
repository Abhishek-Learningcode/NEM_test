const empModel = require("../module/module")

const insertEmp = async (req,resp)=>{
    try {
        const data = new empModel({
        pname:req.body.pname,
        price:req.body.price,
        category:req.body.category,
        quantity:req.body.quantity
    })
    const result = await data.save()
    resp.json(data)
    } catch (error) {
        console.log(error);
        
    }
}

const displayEmp = async (req,resp)=>{
    try {
        const result = await empModel.find()
        resp.json(result)

    } catch (error) {
        console.log(error);
        
    }
}


module.exports={insertEmp,displayEmp}
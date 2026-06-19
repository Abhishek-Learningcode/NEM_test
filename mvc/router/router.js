const express = require('express');
const { insertEmp, displayEmp } = require('../empcontroller/empcontroller');

const router = express.Router();

router.post("/add",insertEmp);
router.get("/",displayEmp);

module.exports=router;
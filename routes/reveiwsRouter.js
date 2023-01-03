const express = require("express");
const router = express.Router();


router.post("/review",(req,res)=>{
    console.log(req.body);
})



module.exports = router;

const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("reciver/home")
})









module.exports=router
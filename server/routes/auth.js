const router=require('express').Router()
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const multer=require("multer")

const user =require("../models/user")

router.post("/register",Upload.single('profileImage'),async(req,res)=>{
try {
    const{firstName,lastName,email,password}=req.body
    const profileImage=req.file
}catch(err)
})
 
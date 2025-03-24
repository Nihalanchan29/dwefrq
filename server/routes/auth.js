const router=require('express').Router()
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const multer=require("multer")

const user =require("../models/user")

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/uploads/")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
    
})

router.post("/register",Upload.single('profileImage'),async(req,res)=>{
try {
    const{firstName,lastName,email,password}=req.body
    const profileImage=req.file
}catch(err){
})
 
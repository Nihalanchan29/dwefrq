const express=require('express')
const app=express()
const mongoose=requiure("mongoose")
const dotenv=require("dotenv").config()
const cors=require("cors")

app.use(cors())
app.use(express.json)
app.use(express.static('public'))

const PORT=3001;
mongoose.connect(process.env.MONGO_URL,{
useNewURLParser:true,
useUnifiedTopology:true
})
.then(()=>{
    app.listen(PORT,()=>console.log('Server Port:${PORT}'))
}).catch((err)=>console.log('${err}did not connect'))

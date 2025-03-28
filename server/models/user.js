const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema(
    {
        firstName: {
            type:String,
            required:true,
        },
        lastname:{
            type:String,
            required:true,
            
        },
        Email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        profileImagePath:{
            type:String,
            default:"",
        },
    tripList:{
        type:Array,
        default:[],
    },
    tripList:{
        type:Array,
        default:[],
    },
    wishList:{
        type:Array,
        default:[],
    },
    propertyList:{
        type:Array,
        default:[],

    },
    reservationList:{
        type:Array,
        default:[],
    }
    },
   {timestamps:true} 
)
const User=mongoose.model("User",UserSchema)
module.exports=User
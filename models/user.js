const mongoose=require('mongoose')
mongoose.Schema.Types.Boolean.convertToFalse.add('');

const Schema=mongoose.Schema

const userSchema=new Schema({
    id:Number,
    name:String,
    email:String,
    password:String,
    phone:Number,
    dob:Date,
    isAdmin:{type:Boolean,default:false }
})


module.exports=mongoose.model('user',userSchema,'users')
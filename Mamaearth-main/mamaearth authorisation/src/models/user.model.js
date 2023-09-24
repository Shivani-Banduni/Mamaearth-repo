const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema  = mongoose.Schema({
     email:{type:String,required:true,unique:true},
     password:{type:String,required:true,minLength:[4,"minimum length 4"]},
     username:{type:String,required:false,minLength:[4,"minimum length 4"]},
     mobile:{type:String,required:true,unique:true,minLength:[10,"length shoud not less than 10"]},
     //role:{type:String,default:"user"}
},
{
    versionKey:false,
    timestamps:true,
},
)
userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 8)
    this.password=hash
return next()
})

userSchema.methods.checkPassword= function(password){
   return bcrypt.compareSync(password, this.password)
}

module.exports= mongoose.model("user",userSchema)
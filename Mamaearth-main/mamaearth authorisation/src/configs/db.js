const mongoose = require("mongoose")

//var db = "mongodb+srv://rohit:singh@newcluster.cwyup.mongodb.net/mamaearthAuthentications?retryWrites=true&w=majority"
module.exports = ()=>{
    return mongoose.connect("mongodb+srv://rohit:singh@newcluster.cwyup.mongodb.net/mamaearthAuthentications?retryWrites=true&w=majority")
    // ,{
    //     useNewUrlParser:true,
    //     useCreateIndex:true,
    //     useUnifiedTopology:true,
       
    // })
    .then(()=>{
    console.log("connection succesfull")
    }).catch((err)=>
   console.log("no connection")
    )

    }
    


const app = require("./index")

const connect = require("./configs/db")

app.listen(5003, async (req,res)=>{
    try{
        await connect()
        console.log("listening port 5003")
    }catch(err){
        console.log(err.msg)
    }
})
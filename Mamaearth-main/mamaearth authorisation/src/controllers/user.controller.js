const express = require("express")
//const cors = require("cors")
const User = require("../models/user.model")
const authenticate = require("../middlewares/authenticate")
const router = express.Router()

router.get("/",authenticate, async (req,res) =>{
    try{
  const users = await User.find().lean().exec()

  return res.status(200).send(users)
    }catch(err){
    res.status(500).send({msg:err.msg})
    }
})

router.post("/",authenticate,async (req,res)=>{
  req.body.userid = req.userID

    try{
  const user = await User.create(req.body)

  return res.status(201).send(user)
    }catch(err){
    res.status(500).send({msg:err.msg})
    }
})

router.patch("/:id",authenticate,async (req,res)=>{
    try{
  const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})

  return res.status(200).send(user)
    }catch(err){
    res.status(500).send({msg:err.msg})
    }
})

router.delete("/:id",authenticate,async (req,res)=>{
    try{
  const user = await User.findByIdAndDelete(req.params.id)

  return res.status(200).send(user)
    }catch(err){
    res.status(500).send({msg:err.msg})
    }
})

module.exports = router
const express = require("express")
const ApprovalSchema = require("../../schema/ApprovalSchema")
const connectToMongo = require("../../db/db")
const UserSchema = require("../../schema/UserSchema")
const router = express.Router()

router.get("/",async(req,res)=>{
    connectToMongo()
    await ApprovalSchema.find()
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err)
        res.send(err)
    })
})


module.exports = router
const express = require("express")
const router = express.Router()
const connectToMongo = require("../db/db")
const Approval = require("../schema/ApprovalSchema")
const UserSchema = require("../schema/UserSchema")

router.post("/",async(req,res)=>{
    const user = req.body;
    if (user.isAdmin) {
        connectToMongo()
        const approvalRequest = {User:user,approvalStatus:"pending"}
        console.log(approvalRequest)
        await Approval.create(approvalRequest).then(()=>{
            res.send("Creation Successful")
        }).catch(err=>{
            console.log(err)
            res.send("Creation Failed")
        })
    }else{
        connectToMongo()
        await UserSchema.create(user).then(()=>{
            res.send("Creation Successful")
        }).catch(err=>{
            console.log(err)
            res.send("Creation Failed")
        })
    }
})


module.exports = router
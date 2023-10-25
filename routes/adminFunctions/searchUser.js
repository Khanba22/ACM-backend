const express = require("express")
const UserSchema = require("../../schema/UserSchema")
const router = express.Router()

router.get("/",async(req,res)=>{
    const user = req.body
    await UserSchema.findOne(user).then((data)=>{
        res.json(data)
    })
})

module.exports = router
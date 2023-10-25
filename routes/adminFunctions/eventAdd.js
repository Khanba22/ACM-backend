const express = require("express")
const router = express.Router()
const EventSchema = require("../../schema/EventSchema")
const connectToMongo = require("../../db/db")

router.post("/",(req,res)=>{
    const event = req.body
    connectToMongo()
    EventSchema.create(event).then(()=>{
        res.send("Event Created Successfully")
    }).catch(err=>{
        console.log("Error")
        res.send("Creation Unsuccessful")
    })
})

module.exports = router
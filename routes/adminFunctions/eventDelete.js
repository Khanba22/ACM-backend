const express = require("express")
const router = express.Router()
const EventSchema = require("../../schema/EventSchema")
const connectToMongo = require("../../db/db")

router.post("/",(req,res)=>{
    const event = req.body
    connectToMongo()
    EventSchema.deleteOne(event).then(()=>{
        res.send("Event Deleted Successfully")
    }).catch(err=>{
        console.log("Error")
        res.send("Deletion Unsuccessful")
    })
})

module.exports = router
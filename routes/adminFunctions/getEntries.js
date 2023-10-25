const express = require("express")
const EventSchema = require("../../schema/EventSchema")
const connectToMongo = require("../../db/db")

const router = express.Router()

router.get("/",(req,res)=>{
    const event = req.body
    connectToMongo()
    EventSchema.findOne({name:event.name}).then((data)=>{
        res.json(data.entries)
    }).catch(err=>{
        console.log(err)
        res.send("Event Not Found")
    })
})

module.exports = router
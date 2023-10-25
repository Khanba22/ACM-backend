const mongoose = require("mongoose")
const entries = require("./Entry")

const EventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        dates: {
            type: String,
            required: true,
            unique: true
        },
        entryFees: {
            type: Number,
            required: true,
        },
        teamSize: {
            type: Number,
            required: true,
            unique: true
        },
        entries:[
           
        ]
    }
)

module.exports = mongoose.model("Event", EventSchema)
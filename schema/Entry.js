const mongoose = require("mongoose")

const EntrySchema = new mongoose.Schema(
    {
        eventName:{
            type:String
        },
        teamName: {
            type: String,
            required: true
        },
        leader: {
            name: {
                type: String,
                required: true
            },
            rknecId:{
                type:String,
                required:true
            },
            contactNumber: {
                type: String,
                required: true
            }
        },
        members:
            [{
                name: {
                    type: String,
                    required: true
                },
                rknecId: {
                    type: String,
                    required: true
                }
            }],
        payment:{
            payerAccName:{
                type:String,
                required:true
            },
            transactionId:{
                type:String,
                required:true
            }
        }
    }
)

module.exports = mongoose.model("Entry", EntrySchema)
const mongoose = require("mongoose")
const User = require("../schema/UserSchema")

const ApprovalSchema = new mongoose.Schema(
    {
        User:{
            type:Object,
            required:true
        },
        approvalStatus:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model("Approval",ApprovalSchema)
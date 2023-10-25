const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rknecId: {
            type: String,
            required:true,
            unique:true
        },
        password: {
            type: String,
            required:true,
            unique:true
        },
        isAdmin: {
            type: Boolean,
            required:true,
        },
        contactNumber:{
            type:String,
            required:true,
            unique:true
        },
        eventsRegistered:{
            type:Array
        }
    }
)

module.exports = mongoose.model("User", UserSchema)
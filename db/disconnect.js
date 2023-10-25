const mongoose = require("mongoose")

const disconnect = async()=>{
    await mongoose.disconnect().then(()=>{
        console.log("Disconnected Successfully")
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = disconnect
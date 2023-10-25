// To connect with your mongoDB database 
const mongoose = require("mongoose");

const connectToMongo = async () => {
    await mongoose.connect(
        "mongodb://127.0.0.1:27017/ACM_Backend",
        {
            dbName: "ACM_Backend",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(()=>{
        console.log("Connection Successful")
    }).catch((err)=>{
        console.log(err)
    });
}

module.exports = connectToMongo
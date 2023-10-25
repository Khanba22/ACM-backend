const express = require("express")
const connectToMongo = require("./db/db")
const app = express()
const cors = require("cors")
app.use(cors())
const PORT = process.env.PORT || 4000
app.use(express.json())

// General Functions
app.use("/register",require("./routes/register.js"))
// app.use("/login",)
app.use("/events",require("./routes/eventdata.js"))
app.use("/registerEvent",require("./routes/eventRegister"))

// Admin Functions
app.use("/getApprovals",require("./routes/adminFunctions/getApprovals"))
app.use("/approveAdmin",require("./routes/adminFunctions/approveAdmin"))
app.use("/addEvent",require("./routes/adminFunctions/eventAdd"))
app.use("/getEntries",require("./routes/adminFunctions/getEntries"))

// Server Listener
app.listen(4000,()=>{
    console.log(`Server Active at http://localhost:${PORT}`)
})
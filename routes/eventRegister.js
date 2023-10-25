const express = require("express")
const EventSchema = require("../schema/EventSchema")
const Entry = require("../schema/Entry")
const UserSchema = require("../schema/UserSchema")
const connectToMongo = require("../db/db")
const router = express.Router()

const checkRegister = async (entry) => {
    const players = [entry.leader, ...entry.members]
    flag = true
    for (let i = 0; i < players.length; i++) {
        const element = players[i];
        const data = await UserSchema.findOne({ rknecId: element.rknecId })
        if (data == null) {
            console.log(element.name + " Is not registered")
            flag = false
            break
        }
    }

    console.log("flag " + flag)
    console.log(typeof (flag))
    return flag
}


router.post("/", async (req, res) => {
    connectToMongo()
    const entry = req.body
    const areAllRegistered = await checkRegister(entry)
    if (areAllRegistered) {
        console.log("Creating Entry")
        EventSchema.updateOne({ name: entry.eventName }, {
            $push: {
                entries: entry,
            }
        }).then(() => {
            const players = [entry.leader, ...entry.members]
            players.forEach(async (player) => {
                await UserSchema.updateOne({ rknecId: player.rknecId }, {
                    $push: {
                        eventsRegistered: entry
                    }
                })
            })
        }).then(() => {
            res.send("Registration Successful")
        })
            .catch(err => {
                console.log(err)
                res.send("Entry Unsuccessful")
            })
    } else {
        res.send("All Participants Must be Registered to the portal")
    }
})


module.exports = router
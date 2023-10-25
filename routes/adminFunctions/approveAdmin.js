const express = require("express")
const ApprovalSchema = require("../../schema/ApprovalSchema")
const connectToMongo = require("../../db/db")
const UserSchema = require("../../schema/UserSchema")
const router = express.Router()


router.post("/", async (req, res) => {
    const approval = req.body
    connectToMongo()
    if (approval.approvalStatus == "Approved") {
        await UserSchema.create(approval.User).then(async() => {
            console.log("Updating Status")
            await ApprovalSchema.updateOne({ User: approval.User },
                {
                    $set: {
                        approvalStatus: "Approved"
                    }
                }).then(() => {
                    res.status(200)
                })
        }).catch(err => {
            res.status(500)
        })
    } else {
        await ApprovalSchema.deleteOne({User:approval.User}).then(() => {
            res.send("Approval rejected Successfully")
        }).catch(err => {
            console.log(err)
            res.send("err")
        })
    }
})


module.exports = router
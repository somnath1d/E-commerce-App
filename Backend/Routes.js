const express = require('express')
const router = express.Router()
const Day = require("./Model")

router.get("/days", async(req,res)=>{
    const days = await Day.find()
    res.send(days)
})

router.post("/days", async(req,res)=>{
    const days = new Day({
        Day : req.body.Day,
        Workout : req.body.Workout,
        Treadmill : req.body.Treadmill,
        Cycle : req.body.Cycle,
        ExtraFood : req.body.ExtraFood,
        ExtraCardio : req.body.ExtraCardio 
    }) 
    await days.save()
    res.send(days)
})

module.exports = router
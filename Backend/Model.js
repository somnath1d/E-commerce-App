const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Day : String,
    Workout : String,
    Treadmill : String,
    Cycle : String,
    ExtraFood : String,
    ExtraCardio : String
})

module.exports = mongoose.model("Day", schema)
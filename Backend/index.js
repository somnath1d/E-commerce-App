const express = require ("express")
const mongoose = require("mongoose")
const routes = require("./Routes")

mongoose
    //url
    .then(() => {
        const app = express()
        app.use("/api", routes)

        app.listen(1000, () => {
            console.log("Database connected!")
        })
    })
    

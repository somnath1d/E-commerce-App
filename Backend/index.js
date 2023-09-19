const express = require ("express")
const mongoose = require("mongoose")
const routes = require("./Routes")

mongoose
    .connect("mongodb+srv://admin:Ri7IF3MEYbEpzLxx@cluster0.339f25t.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        const app = express()
        app.use("/api", routes)

        app.listen(1000, () => {
            console.log("Database connected!")
        })
    })
    

const express = require('express')
const appRouter = express.Router()

appRouter.get('/', (req, res) => {
    console.log("im in the index")
    res.render("index")
})


module.exports = appRouter
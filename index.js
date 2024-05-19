const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    return res.json({ message: "ok" })
})

app.post('/log', (req, res) => {
    console.log("===", req.body.name)
    if (req.body.name === "location") {
        console.log("location", req.body)
    }
    return res.json({ message: "ok" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
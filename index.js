const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.json({ message: "ok" })
})

app.post('/location', (req, res) => {

    if (req.body.name === "location") {
        const loc = req?.body?.location
        console.log(`${loc.createdAt} ${loc.uuid.substring(loc.uuid.length - 8)} ${loc.isMoving ? "moving" : "stationary"} ${loc.appState}`)
    }
    return res.json({ message: "ok" })
})

app.post('/log', (req, res) => {
    console.log("<===>", req?.body?.name)
    return res.json({ message: "ok" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
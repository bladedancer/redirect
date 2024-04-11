const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/redirectToFinal', (req, res) => {
    let hostname = req.hostname.split(":") + ":8087";
    console.log(`Sending redirect to ${hostname}`)
    res.redirect(`http://${hostname}/final`)
})

app.get('/redirectFail', (req, res) => {
    let hostname = req.hostname.split(":") + ":8087";
    console.log(`Sending redirect to ${hostname}`)
    res.redirect(`http://${hostname}/redirectToFinal`)
})

app.get('/redirectSucceed', (req, res) => {
    let hostname = req.hostname.split(":") + ":8086";
    console.log(`Sending redirect to ${hostname}`)
    res.redirect(`http://${hostname}/final`)
})

app.get('/final', (req, res) => {
    res.contentType("application/json");
    res.send('\"Success\"')
})

app.listen(8085, '0.0.0.0', () => {
  console.log(`Example app listening on port 8085`)
})

app.listen(8086, '0.0.0.0', () => {
    console.log(`Example app listening on port 8086`)
})

app.listen(8087, '0.0.0.0', () => {
    console.log(`Example app listening on port 8087`)
})
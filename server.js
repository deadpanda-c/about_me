const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/my_projects', (req, res) => {
    res.sendFile(path.join(__dirname, './nothing.html'))
})

app.get('/about_me', (req, res) => {
    res.sendFile(path.join(__dirname, './nothing.html'))
})

app.get('/contact_me', (req, res) => {
    res.sendFile(path.join(__dirname, './nothing.html'))
})


app.listen(port, () => {
    console.log(`Website is running on http://localhost:${port}`)
})
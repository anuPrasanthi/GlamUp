const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const stockRouter = require('./routes/glamUp-router')
const app = express()
const apiPort = 3000

app.use(bodyparser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyparser.json({limit: '50mb'}))
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api', stockRouter)
// var publicDir = require('path').join(__dirname,'/public');
// app.use(express.static(publicDir));
app.use('/public', express.static('public'));
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
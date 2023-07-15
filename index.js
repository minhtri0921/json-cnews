const express = require('express')
const app = express()

app.use(express.json());

const route = require('./routes')

app.use(express.static(__dirname + '/client'))

//Router init 
route(app)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html')
})

//start server 
const port = 3000;
app.listen(port, () => console.log(`Server is starting on port ${port}`))
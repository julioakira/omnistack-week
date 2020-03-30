const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')

const PORT = 3333

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(PORT)
console.log(`Listening on port ${PORT}`)
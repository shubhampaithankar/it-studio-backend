// app.js
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDatabase = require('./src/config/database')
const routes = require('./src/routes/index')

require('dotenv').config()


const app = express()
const PORT = process.env.PORT

connectDatabase()

app.use(cors())
app.use(bodyParser.json())
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

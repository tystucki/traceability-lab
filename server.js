const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// include and ititialize the rollbar library with your access token

// record a generic message and send it to rollbar


const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'a28401c4a17c4e249761ddb3de6c5bb0',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

// const controller = require('./controller');
// const {getSuggestions} = controller;

// app.get('./api/suggestions', getSuggestions )

const groceryList = ['Buns', 'Ground Beef', 'Lettuce', 'Cheese', 'Mayonnaise', 'Soda', 'Chips']
console.log(groceryList)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.js'))
})

app.get('/api/groceryList', (req, res) => {
    res.status(200).send(groceryList)
})

app.post('/api/groceryList', (req, res) => {
    let {groceryItem} = req.body

    const index = item === groceryItem
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))

require('dotenv').config()
const express = require('express')
const app = express()
//const cors = require('cors')
//const mongoose = require('mongoose')

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

module.exports = app
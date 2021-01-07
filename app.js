require('dotenv').config()
const express = require('express')
const app = express()
//const cors = require('cors')
const mongoose = require('mongoose')

// Opening a connection to the database
console.log('connecting to MongoDB')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

mongoose.connection.close()
module.exports = app
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//mongoDB Atlas 연결
const Mongo_URI =
  'mongodb+srv://gyfl23242:admin1234@cluster0.0k5oj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose
  .connect(Mongo_URI, { useNewURlParser: true, useUnifiledTopology: true })
  .then(() => console.log('MongoDB Conected'))
  .catch((error) => console.log(error))

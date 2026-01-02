require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ME', (req, res) => {
  res.send('I am Yashraj')
})

app.get('/about', (req, res) => {
  res.send('<h1>I am a backend developer</h1><p>I love coding</p>')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

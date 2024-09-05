require('dotenv').config();

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hanzala Tahir !')
  })

  app.get('/login', (req, res) => {
    res.send('Please login to continue')
  })

app.listen(process.env.server, () => {
  console.log(`Example app listening on port ${port}`)
})

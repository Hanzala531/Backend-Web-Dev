const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>')
})

app.get('/About', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/Contact', (req, res) => {
  res.send('<h1>Contact</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
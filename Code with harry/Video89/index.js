const express = require('express')
const blog = require('./Routes/Blog')

const app = express()
const port = 3000

app.use(express.static('public')) // serve static files from the public directory
app.use('/Blog', blog) // use the blog route


app.get('/', (req, res) => {
  console.log("GET request received");
  
  res.send('Hello World! 2')
})

app.post('/', (req, res) => {
  console.log("POST request received");
  res.send('Hello World! 7')
})


app.put('/', (req, res) => {
  console.log("PUT request received");
  res.send('Hello World!')
})

app.delete('/', (req, res) => {     // DELETE method route
  console.log("DELETE request received");
  res.send('Hello World! delete')
})
app.get('/about', (req, res) => {
  console.log("POST request received");
  res.sendFile('/Templates/index.html' ,{root: __dirname})
})
app.get('/api', (req, res) => {
  console.log("Api response received");
  res.json({message: 'Hello World!' , language: 'Node.js' , framework: 'Express.js' , version: '1.0.0' , author: 'Sarath' , date: '2021-09-01' , time: '10:00:00', status: 'success', code: 200, error: 'null' })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
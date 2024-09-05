const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) ;

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>')
})
app.get('/Resources', (req, res) => {
  res.send('<h1>Resources Page</h1>')
})
app.get('/Contact', (req, res) => {
  res.send('<h1>Comtact page</h1>')
})
app.get('/About', (req, res) => {
  res.send('<h1>About page</h1>')
})
app.get('/Blog', (req, res) => {
  res.send('<h1>Blog page</h1>')
})
// app.get('/Blog/intro-to-js', (req, res) => {
//   //logic to be written to ftetch blog fropm the database
//   res.send('<h1>Introduction to javascript</h1>')
// })
// app.get('/Blog/intro-to-Python', (req, res) => {
//   //logic to be written to ftetch blog fropm the database
//   res.send('<h1>Introduction to Python</h1>')
// })

app.get('/Blog/:slug', (req, res) => {
  //logic to be written to ftetch blog fropm the database\
  console.log(req.params);
  console.log(req.query);
  
  res.send(`<h1>hi this is ${req.params.slug}</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
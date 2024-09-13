const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("GET request received");
  res.send('<h1>This is a Blog Page</h1>')
})      

router.get('/about', (req, res) => {
  console.log("POST request received");
  res.send("<h1>About Blogs</h1>")
})

router.get('/blogpost/:slug', (req, res) => {     
    console.log("GET request received");
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router;
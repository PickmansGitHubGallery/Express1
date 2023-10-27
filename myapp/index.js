const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hest', (req, res) => {
  res.send('<h1> Hej Heste Mand</h1>')
})

app.get('/api/hest', (req, res) => {
  res.send('{"name": "hest","age": "23"}')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
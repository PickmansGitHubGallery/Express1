const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Mormor', (req, res) => {
  res.send('<h1> Hej Mormor</h1>')
})

app.get('/api/bedstemor', (req, res) => {
  res.json({"name": "Grete","age": "73"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
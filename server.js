const express = require('express')
const app = express()
const { fizzBuzz } = require('./fizzBuzz')

const PORT = 3000

app.get('/fizzBuzz/:number', (req, res) => {
  const number = Number(req.params.number)
  const result = fizzBuzz(number)
  res.status(200).send(result)
})

app.listen(PORT, () => console.log('...listening on port' + PORT))
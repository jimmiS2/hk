const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200)
  res.send('Welcome')
})

app.get('/about', (req, res) => {
  res.status(200)
  res.send('this is the about page.')
})

app.get('/users/:name', (req, res) => {
  const { name } = req.params
  res.send(`hello ${name}`)
})

app.get('/square/:num', (req, res) => {
  res.status(200)
  const { calc, num } = req.params
  res.send(`square : ${num * num}`)
})

app.listen(port, () => {
  console.log(`${port}번 포트에서 실행 중...`)
})

const express = require('express')
const useragent = require('express-useragent')
const app = express()
const port = 3000
const serverLog = require('./serverLog')

app.use(useragent.express())
app.get('/favicon.ico', (req, res) => res.status(204))
app.use(serverLog.logger)

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

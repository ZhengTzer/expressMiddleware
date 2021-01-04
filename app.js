const express = require('express')
const useragent = require('express-useragent')
const app = express()
const port = 3000

app.use(useragent.express())

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

// middleware
app.use(function (req, res, next) {
  const reqTime = new Date()
  res.on('finish', () => {
    const resTime = new Date()
    const totalTime = resTime - reqTime
    console.log(
      `request time: ${reqTime.toLocaleString()} || respond time: ${resTime.toLocaleString()} || request type: ${
        req.method
      } || from ${
        req.originalUrl
      } || total time:${totalTime}ms || with browser: ${req.useragent.browser}`
    )
  })
  next()
})

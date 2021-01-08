function logger(req, res, next) {
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
}

module.exports = { logger }

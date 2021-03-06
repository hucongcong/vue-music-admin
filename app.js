const express = require('express')
const recommend = require('./routes/recommend')
const singer = require('./routes/singer')
const app = express()
// 跨域支持
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/recommend', recommend)
app.use('/singer', singer)

app.listen(3000, () => {
  console.log('app音乐服务器启动成功了')
})

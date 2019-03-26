const express = require('express')
const router = require('./router')
const app = express()

app.use(router)

app.listen(3000, () => {
  console.log('app音乐服务器启动成功了')
})

const axios = require('axios')
const router = require('express').Router()

// 获取轮播图数据
router.get('/recommend/swiper', async (req, res) => {
  let data = await axios({
    method: 'get',
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    params: {
      _: new Date().getTime(),
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1
    }
  })
  console.log(data.data)
  res.send(data.data)
})

module.exports = router

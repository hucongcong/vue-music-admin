# vue-music-admin

用于抓取音乐 app 接口数据（自用）

# 接口说明

- 基准地址：`http://localhost:3000`

## 获取轮播图数据

- 接口地址：`/swiper`
- 请求方式: `get`
- 参数：无
- 返回示例

```json
{
  "code": 0,
  "data": {
    "slider": [
      {
        "linkUrl": "http://y.qq.com/w/album.html?albummid=003ZTSn32YTO6c",
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1219073.jpg",
        "id": 20348
      },
      {
        "linkUrl": "https://y.qq.com/m/digitalbum/gold/index.html?openinqqmusic=1_video=true&id=6474887&g_f=shoujijiaodian",
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1217461.jpg",
        "id": 20338
      },
      {
        "linkUrl": "http://y.qq.com/w/album.html?albummid=001961hi0CnVBU",
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1219255.jpg",
        "id": 20351
      },
      {
        "linkUrl": "https://y.qq.com/apg/zssphy/index.html?mbref=978.20117&openinqqmusic=1",
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1219579.jpg",
        "id": 20149
      },
      {
        "linkUrl": "http://y.qq.com/w/album.html?albummid=000En3aK3aG1H4",
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1215909.jpg",
        "id": 20341
      }
    ],
    "radioList": [
      {
        "picUrl": "http://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg",
        "Ftitle": "热歌",
        "radioid": 199
      },
      {
        "picUrl": "http://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg",
        "Ftitle": "一人一首招牌歌",
        "radioid": 307
      }
    ],
    "songList": []
  }
}
```

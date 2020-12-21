const Mock = require("mockjs")

let data = Mock.mock('/login',{
  "code": 0,
  "data": {

  },
  "message": "登录成功"
})

let data1 = Mock.mock('/data',{
  "code": 0,
  "data": [
    {
      "key": 1,
      "area": "中国",
      "java": 5000,
      "php": 4000,
      "node": 3000,
      "js": 6000,
      "python": 4800
    },
    {
      "key": 2,
      "area": "美国",
      "java": 300,
      "php": 3000,
      "node": 6000,
      "js": 5000,
      "python": 8000
    },
    {
      "key": 3,
      "area": "日本",
      "java": 1000,
      "php": 8000,
      "node": 600,
      "js": 1000,
      "python": 4800
    },
    {
      "key": 4,
      "area": "韩国",
      "java": 2000,
      "php": 4000,
      "node": 6000,
      "js": 4000,
      "python": 800
    },
  ],
  "message": ""
})

// const request = {
//   data
// }

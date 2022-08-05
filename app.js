const express = require('express')
const app = express()
const port = 3000


//設定首頁路由
app.get('/', (req, res) => {
  res.send('Hello world!')
})



//設定監聽
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
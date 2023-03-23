const express = require('express')
const cors = require('cors')
const morgan = require('morgan')





const router = require('./router')
const app = express()

const PORT = process.env.PORT || 3000

// 解析客户端发送的json
app.use(express.json())
app.use(express.urlencoded())

// 跨域
app.use(cors())


// 日志处理
app.use(morgan('dev'))


// 路由引入
app.use('/api/v1',router)


// 静态资源处理
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

//ex12-routing.js
//라우팅(routing) : 경로 요청에 따른 처리하기

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200)
  res.send('Hello Express~')
})

app.get('/login-form', (req, res) => {
  res.status(200)
  res.send('로그인 페이지입니다.')
})

app.get('/login', (req, res) => {
  res.status(200)
  res.send('로그인 성공!')
})

//app.get('/join-form', (req, res) => {} )
//app.get('/join,' (req, res) => {} )
app.get('/posts', (req, res) => {
  res.status(200)
  res.send('게시글 목록입니다.')
})

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중...`)
})

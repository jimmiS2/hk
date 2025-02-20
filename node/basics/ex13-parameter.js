//라우트(URL) = 파라미터로 동적 URL 처리하기

const express = require('express')
const app = express()
const port = 3000

// 인덱스 페이지
app.get('/', (req, res) => {
  res.status(200)
  res.send('Hello Express')
})

// 게시물 목록
app.get('/posts', (req, res) => {
  res.status(200)
  res.send('게시글 목록 조회')
})

// 게시물 하나만
app.get('/posts/:id', (req, res) => {
  res.status(200)
  res.send(`게시물 조회 ID : ${req.params.id}`)
})

// 게시물 추가
app.post('/posts', (req, res) => {
  res.status(200)
  res.send('게시물 추가')
})

// 게시물 수정
app.put('/posts/:id', (req, res) => {
  res.status(200)
  res.send(`게시물 수정 ID : ${req.params.id}`)
})

// 게시물 삭제
app.delete('/posts/:id', (req, res) => {
  res.status(200)
  res.send(`게시물 삭제 ID : ${req.params.id}`)
})

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중...`)
})

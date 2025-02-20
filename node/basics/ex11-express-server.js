const express = require('express')
const app = express()
const PORT = 3000

// get 메소드를 지원하는 서버를 생성
app.get('/', (req, res) => {
  res.status(200) // 상태 코드를 200(OK)로 설정
  res.send('Hello Express')
})

app.listen(PORT, () => {
  console.log(`${PORT} 번 포트에서 실행 중`)
})

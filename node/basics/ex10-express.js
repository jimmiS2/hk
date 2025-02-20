//ex10-express.js
// express(익스프레스) 프레임워크 소개

//웹서버를 구현하기 위해 필요한 여러 기능을 제공한다.
//1. 라우팅 - URI 경로에 따른 처리
//2. 미들웨어 : 요청과 응답을 처리하는 중간에 들어가는 여러기능을 담당하는 모듈들
//3. 뷰 템플릿 엔진 : 동적인 html파일을 생성하기 위해 data-binding을 제공함.
//4. 정적인 파일 지원 : html, css, js, 이미지(png, jpg, svg), 동영상(mp4)

//익스프레스 모듈 설치
//1. npm init  : node 모듈 초기화
//2. npm i express : express 모듈 설치
//* --save : 모듈을 설치하고 나서, package.json > dependency에 모듈명을 기록하는 옵션.

//맥os
//1. sudo npm init
//2. sudo npm i express

// node 코어 모듈에 있는 http 모듈을 사용한 간단한 웹서버
const http = require('node:http')

// 요청 발행시 해야할 일을 콜백함수에 등록
const server = http.createServer((req, res) => {
  console.log('HTTP 요청 발생')
})

//3000번 포트에서 서버 실행
server.listen(5000, () => {
  console.log('3000번 포트에서 서버 실행 중')
})

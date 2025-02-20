const c = require('ansi-colors')

function Hello(name) {
  console.log(c.green(name)`님 환영합니다.`)
}

Hello('강감찬')

export default Hello

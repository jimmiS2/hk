async function init() {
  const response = await fetch('http://jsonplaceholder.typicode.com/users')
  const users = await response.json() // 가저온 결과를 객체로 저장
  console.log(users)
}

init()
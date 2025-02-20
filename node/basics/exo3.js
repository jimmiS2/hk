// 일반 함수와 화살표 함수

// 함수형 변수(함수 표현식)
let hi = function () {
  return '안녕하세요'
}

// 화살표 함수
let hi2 = () => {
  return '안녕하심'
}

let sum = (a, b) => a + b

console.log(hi())
console.log(hi2())
console.log(sum(10, 20))

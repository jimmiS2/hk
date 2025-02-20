// 연습문제1: 동적 표현식 렌더링
// 목표: props로 받은 이름을 화면에 출력하는 간단한 컴포넌트 연습
// 요구사항
// 1. Namecard 컴포넌트를 만들고, user 객체의 정보를 JSX에 넣어서
//   표현한다.
// 2. props는 사용안함.

const user = {
  firstName: "김",
  lastName: "민수",
  age: 30,
};

export function Namecard() {
  return (
    <div>
      <h2> 문제 1: 동적 표현식 렌더링</h2>
      <p>
        이름 : {user.firstName}
        {user.lastName}
      </p>
      <p>나이 : {user.age}</p>
    </div>
  );
}

export function Greeting(props) {
  return (
    <div>
      <h2> 문제 2: props 이용</h2>
      <p>
        {" "}
        안녕하세요, {props.firstName}님! 당신의 나이는 {props.age}세입니다.{" "}
      </p>
    </div>
  );
}

export function Price(props) {
  return (
    <div>
      <h2> 문제 3: 객체배열 출력하기 </h2>
      <ul>
        {props.products.map((item) => (
          <li style={{ listStyle: "none" }} key={item.id}>
            {item.id}. {item.name} - {item.price}원
          </li>
        ))}
      </ul>
    </div>
  );
}

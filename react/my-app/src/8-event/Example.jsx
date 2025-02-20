import React, { useCallback, useState } from "react";

//제1: 마우스 오버와 마우스 아웃 이벤트
// 목표: onMouseEnter와 onMouseLeave 이벤트를 사용하여
//  마우스가 특정 영역에 들어오거나 나갈 때 상태를 변경하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 마우스가 박스 위에 올라가면 배경색이 변경됩니다.
// 마우스가 박스를 벗어나면 원래 배경색으로 돌아옵니다.
// 상태로 관리되는 메시지를 화면에 출력하세요. (예: "마우스가 들어왔습니다", "마우스가 나갔습니다")

export function Ex1() {
  const boxstyle = {
    border: "1px solid black",
    margin: "3px",
    width: "500px",
    height: "500px",
  };

  const [message, setMessage] = useState("마우스 상태");
  const mouseEnter = (e) => {
    setMessage("마우스가 들어왔습니다.");
    e.target.style.setProperty("background-color", "#000");
  };
  const mouseLeave = (e) => {
    setMessage("마우스가 나갔습니다.");
    e.target.style.setProperty("background-color", "#fff");
  };

  return (
    <div>
      <div
        id="box"
        style={boxstyle}
        onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={mouseLeave}
      ></div>
      <p> {message} </p>
    </div>
  );
}

//연습문제2: 폼 제출 이벤트 처리하기
// 목표: onSubmit 이벤트를 통해 폼 제출을 처리하고 기본 동작을 방지하는 방법
//요구사항 - 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자 이름과 나이를 입력하는 폼을 만드세요.
// 2.폼이 제출되면 입력값을 콘솔에 출력하고 입력 필드를 비웁니다.
// 3.기본 폼 제출 동작을 방지하세요 (e.preventDefault() 사용).

export function Ex2() {
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");

  const nameChange = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [username]
  );

  const ageChange = useCallback(
    (e) => {
      setUserage(e.target.value);
    },
    [userage]
  );

  const getUserdata = (e) => {
    e.preventDefault();
    console.log(`이름: ${username} 나이: ${userage}`);
    setUsername("");
    setUserage("");
  };

  return (
    <div>
      <form action={"#"} method="POST">
        <input
          type="text"
          name="name"
          placeholder="이름 입력"
          value={username}
          onChange={nameChange}
        />
        <input
          type="number"
          name="age"
          placeholder="나이 입력"
          value={userage}
          onChange={ageChange}
        />
        <br />
        <br />
        <button type="button" onClick={getUserdata}>
          {" "}
          제출{" "}
        </button>
        <br />
      </form>
    </div>
  );
}

// 연습문제 3: 입력 필드에서 글자 수 제한하기
// 목표: 입력 필드의 입력값을 상태로 관리하고 글자 수 제한하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자가 텍스트를 입력할 수 있는 입력 필드가 있습니다.
// 2.입력값은 최대 10자까지만 허용됩니다.
// 3.입력값의 길이에 따라 남은 글자 수를 화면에 표시하세요.

export function Ex3() {
  const NUM = 10;
  const [input, setInput] = useState("");
  const [remain, setRemain] = useState(10);

  const ChangeText = useCallback((e) => {
    if (e.target.value.length <= NUM) {
      setInput(e.target.value);
      setRemain(NUM - e.target.value.length);
    }
  });

  return (
    <div>
      <br />
      <input type="text" value={input} onChange={ChangeText} />
      <p> 남은 글자수 : {remain} </p>
    </div>
  );
}

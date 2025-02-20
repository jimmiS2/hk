// 리액트 훅(React Hooks)은 함수형 컴포넌트에서도
// 클래스 컴포넌트의 기능(예: 상태 관리, 생명 주기 관리)을 사용할 수 있도록 도와주는 기능입니다.
// 훅은 리액트 v16.8부터 도입되었으며,
// useState, useEffect, useContext 등 다양한 훅이 제공됩니다.

// Hook이라는 영단어는 갈고리라는 뜻인데,
// 프로그래밍에서는 원래 존재하는 어떤 기능에 갈고리를 거는 것처럼
// 끼어 들어가 같이 수행되는 것

// 1.useState 훅
// 컴퍼넌트 내에서 상태를 관리할 수 있도록 도와주는 훅이다.
// 상태 변수와 상태를 업데이트 하는 함수를 반환합니다.

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export function Counter1() {
  let count = 0;

  return (
    <div>
      {/* 리렌더링이 안되는 이슈 발생 */}
      <h1>Counter : {count} </h1>
      <button onClick={() => count + 1}> 증가 </button>
    </div>
  );
}

export function Counter2() {
  const [count, setcount] = useState(0);
  // 상태 변수가 업데이트시 리렌더링 됨.
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setcount(count + 1)}> +1 </button>
    </div>
  );
}

// 2. useEffect 훅: 사이드 이펙트 관리 훅
// 함수형 컴퍼넌트의 생명주기 함수를 지원한다.
// 1. 마운트 : useEffect( () => {} , {});
// 2. 언마운트 : useEffect(()=>{return()]})
// 3. 업데이트(props, state가 업데이트 될 때) : useEffect(() => {}, [state])

export function Counter3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("컴포넌트 마운트");
    return console.log("컴포넌트 언마운트");
  }, []);

  useEffect(() => {
    console.log("컴퍼넌트가 업데이트 되었습니다.");
  }, [count]); // 의존성 변수(배열)

  return (
    <div>
      <p> 총 {count} 번 출력했습니다.</p>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}

// 3. useMemo 훅
// useMemo는 특정 연산의 결과를 메모리제이션(저장)하며
// 불필요한 재계산을 방지하는데 사용 한다.
// 컴퍼넌트가 렌더링 될 때 마다 매번 계산 하는 대신
// 의존성 배열에 명시된 값이 변경될 때만 해당 연산을 다시 수행한다.
// 용도
// 1. 비용이 큰 연산을 최적화 핼 때
// 2. 렌더링 성능을 개선 할 떄

export function Counter4() {
  const [number, settNumber] = useState(0);
  const [inputValue, setInoutoi] = useState("");

  // number 상태변수가 변경되지 않는 한, double 값은 재 연산되지 않음.
  const double = useMemo(() => {
    console.log("두 배 연산 중.....");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h1> useMemo</h1>
      <h1> 입력한 숫자 : {number} </h1>
      <h2> 두 배 결과: {double} </h2>
      <input
        type="number"
        value={number}
        placeholder="입력하세요"
        onChange={(e) => settNumber(parseInt(e.target.value))}
      />{" "}
      <br />
      <input
        type="number"
        value={inputValue}
        onChange={(e) => settNumber(parseInt(e.target.value))}
      />
    </div>
  );
}

// 4.useCallback 훅
// 개념: useCallback은 메모이제이션된 콜백 함수를 반환하여
// 함수가 불필요하게 새로 생성되는 것을 방지하는 훅입니다.
// useMemo와 비슷한 기능으로, useMemo는 값을, useCallback은 함수를 반환.
// 용도
// 1. 컴포넌트가 렌더링될 때마다 동일한 함수를 다시 생성하는 것을 피하고 싶을 때
// 2. 자식 컴포넌트에 함수를 props로 전달할 때, 불필요한 재렌더링을 방지할 수 있습니다.

export function Counter5() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const double = useMemo(() => {
    console.log("두 배 연산 중.....");
    return number * 2;
  }, [number]);

  // useCallback 으로 숫자 입력 핸들러(콜백함수) 메이제이션
  const handleNumberChange = useCallback(
    (e) => {
      console.log("useCallback 메모이제이션1");
      setNumber(parseInt(e.target.value));
    }
    //[number] // 의존성 배열에 number를 초함하면 number값이 변경 될 떄마다 함수가 새롭게 생성 (필요x)
  );

  const handleInputChange = useCallback(
    (e) => {
      console.log("useCallback 메모이제이션2");
      setNumber(parseInt(e.target.value));
    },
    [inputValue]
  );

  return (
    <div>
      <h1> useCallback</h1>
      <h1> 입력한 숫자 : {number} </h1>
      <h2> 두 배 결과: {double} </h2>
      <input
        type="number"
        value={inputValue}
        placeholder="입력하세요"
        onChange={handleNumberChange}
      />{" "}
      <br />
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

// 5.useRef 훅
// 개념: useRef는 리액트에서 변경 가능한 참조 객체를 제공하는 훅입니다.
// useRef로 생성한 객체는 컴포넌트가 리렌더링되더라도 값이 유지됩니다.
// 사용 용도
// 1. DOM 요소에 접근하기 위해 (예: 포커스, 스크롤 제어)
// 2. 상태값과 다르게 리렌더링 없이 값 유지가 필요한 경우 (예: 이전 값 저장, 타이머 등)
// 3. 성능 최적화에 유리합니다. 값이 변하더라도 불필요한 리렌더링을 방지할 수 있습니다.

export function Counter6() {
  const [count, setCount] = useState(0);
  const clickCounter = useRef(0);
  // clickCounter는 컴퍼넌트가 리렌더링 할 떄 값이 초기화 되지 않음.
  // count는 리렌더링 될 때 화면에 반영하지만, clickCounter는 리렌더링을 발생시키지 않고 값만 냠

  const handleClick = () => {
    setCount(count + 1);
    clickCounter.current += 1;
    console.log("총 클릭횟수 : ", clickCounter.current);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>버튼클릭 횟수: {clickCounter.current}</h2>
      <button onClick={handleClick}> +1</button>
    </div>
  );
}

export function Counter7() {
  const [count, setCount] = useState(0);
  const clickBtnRef = useRef(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    setCount(count + 1);
    clickBtnRef.current += 1;
    console.log("총 클릭 횟수 : ", clickBtnRef.current);

    //버튼 클릭시 입력창에 포커스 설정
    if (inputRef.current) {
      inputRef.current.value = `현재 카운트: ${count + 1}`;
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Counter : {count}</h2>
      <h2> 버튼 클릭 횟수 : {clickBtnRef.current}</h2>

      <input type="text" ref={inputRef} />
      <br />
      <button onClick={handleClick}> 증가 및 입력창 포커스 </button>
    </div>
  );
}

//Hook 훅의 규칙
//1. 무조건 최상위 레벨에서만 호출해야 됨.
//2. 반복문이나 조건문 또는 중첩된 함수 안에서 호출하면 안됨.
//3. 컴퍼넌트가 렌더링 될때마다 매번 같은 순서로 호출되어야 함.
//4. 리액트 함수 컴퍼넌트에서만 호출할 수 있다. 일반적인 JS함수에서 훅을 호출하면 안됨.

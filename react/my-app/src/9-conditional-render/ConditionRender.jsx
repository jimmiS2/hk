// 조건부 렌더링
// 특정 조건에 따라 컴포넌트나 엘리먼트를 화면에 렌더링하는 기법입니다.
// 자바스크립트의 조건문(예: if-else, 삼항 연산자, 논리 연산자(AND) 등)을 활용하여
// 동적으로 UI를 제어할 수 있습니다.

//조건부 렌더링 방법
//1. if문 사용
//2. 삼항 연산자 (? :) 사용
//3. 논리 연산자 (&&) 사용

import React, { useState } from "react";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  // 1. if문 사용
  if (isLoggedIn === "true") {
    return <h3> 환영합니다. </h3>;
  } else {
    return <h3> 로그인이 필요합니다. </h3>;
  }
}

export function Conditional1(props) {
  return <Greeting isLoggedIn="true" />;
}

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onCLickLogout } = props;

  return (
    <div>
      {/* 논리 연산자 && 사용 */}
      {isLoggedIn && <span style={StyleSheet.Greeting}>환영합니다. </span>}

      {/* 삼항 연산자 사용 */}
      {isLoggedIn ? (
        <button onClick={onCLickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onCLickLogout={onClickLogout}
        onClickLogin={onClickLogin}
      />
      <div style={{ padding: 16 }}> 랜딩페이지에 오신 것을 환영합니다.</div>
    </div>
  );
}

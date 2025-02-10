// List.jsx
//리액트에서 리스트와 키의 개념
// 리스트(List): 배열 데이터를 동적으로 렌더링하기 위해 사용되는 JSX 요소들의 집합
//  React에서는 배열의 각 항목을 JSX 엘리먼트로 변환하여 화면에 출력합니다.
// 키(Key): 리액트에서 각 리스트 항목을 고유하게 식별하기 위해 사용하는 속성입니다.
//  키는 리액트가 어떤 요소가 변경되었는지, 추가되었는지,
//  제거되었는지를 빠르게 파악하여 DOM을 효율적으로 업데이트하는 데
//  중요한 역할을 합니다.

import React, { useState } from "react";

// 간단한 숫자 리스트 렌더링
export function NumberList() {
  const nums = [1, 2, 3, 4, 5];
  return (
    <>
      <p> Number List </p>
      {/* 배열의 인덱스를 Key 값으로 사용하는 것은 좋지 않음 
       -> 배열의 순서변경, 추가, 삭제시 리렌더링을 해야하기 때문에 퍼포먼스 문제 발생
       -> 입력의 포커스나 애니메이션 효과등의 상태를 유지할 수 없음.   */}
      <ul>
        {nums.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

// 객체 리스트 렌더링
export function UserList() {
  const users = [
    { id: 1, name: "홍길동", email: "111@mail.com" },
    { id: 2, name: "길동홍", email: "222@mail.com" },
    { id: 3, name: "홍동길", email: "333@mail.com" },
  ];

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

// 중첩된 리스트
export function CategoryList() {
  const cate = [
    { id: "fruits", name: "Fruits", items: ["Apple", "Banana", "Orange"] },
    {
      id: "vegetables",
      name: "Vegetables",
      items: ["Carrot", "Cabbeage", "Lettuces"],
    },
  ];

  return (
    <div>
      {cate.map((category) => {
        return (
          <div key={category.id}>
            <h3> {category.name} </h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}> {item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

// 동적 객체 리스트
export function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트" },
    { id: 2, text: "JS 공부" },
    { id: 3, text: "Node 공부" },
  ]);

  const addTodo = () => {
    const newTodo = { id: todos.length + 1, text: "새로운 할 일" };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h3> TODO List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.text}</li>
        ))}
      </ul>
      <button onClick={addTodo}> 할일 추가 </button>
    </div>
  );
}

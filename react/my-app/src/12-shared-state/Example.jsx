import React, { useState } from "react";

/**
 * 연습문제 1: 두 개의 숫자 입력 필드의 합 계산하기 (State 끌어올리기)
    문제 설명:
    두 개의 숫자 입력 필드를 만들고 입력한 숫자들의 합을 부모 컴포넌트에서 
    실시간으로 계산하여 출력합니다.
 */

function NumberField1({ value, onChange }) {
  return (
    <div>
      <label>첫번째 숫자: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function NumberField2({ value, onChange }) {
  return (
    <div>
      <label>두번째 숫자: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function Ex1() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <NumberField1 value={num1} onChange={setNum1} />
      <NumberField1 value={num2} onChange={setNum2} />
      <p> 합산 : {parseInt(num1) + parseInt(num2)}</p>
    </div>
  );
}

/**
 * 연습문제2: 선택한 리스트 항목 표시하기 (State 끌어올리기)
 * 문제 설명:
    리스트에 여러 항목(예: 과일 목록)이 주어져 있고, 사용자가 항목을 선택하면 
    선택한 항목들이 부모 컴포넌트에서 관리되어 화면에 표시됩니다.

    const items = ["사과", "바나나", "오렌지", "수박", "포도"];

    요구사항
    항목을 클릭하면 선택된 항목들이 부모 컴포넌트에 저장되어 표시됩니다.
    이미 선택된 항목을 클릭하면 해당 항목이 선택 목록에서 제거됩니다.
    상태는 부모 컴포넌트에서 관리합니다.
 */

function ListFiled({ onClickList, onChangeColor, value }) {
  const items = ["사과", "바나나", "오렌지", "수박", "포도"];
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item}
          onClick={(e) => {
            onClickList(item, e.target);
          }}
          style={{ cursor: "pointer" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Ex02() {
  const [selectList, setSelectList] = useState([]);
  const [color, setColor] = useState("white");

  function onClickList(value, list) {
    console.log(list);
    if (!selectList.includes(value)) {
      setSelectList([...selectList, value]);
      list.style.background = "gray";
    } else {
      setSelectList(selectList.filter((item) => item !== value));
      list.style.background = "white";
    }
  }

  return (
    <div>
      <h2> 리스트 선택 및 연동 </h2>
      <ListFiled onClickList={onClickList} />
      <p> 선택된 항목 </p>
      <ul>
        {selectList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState, useRef } from "react";

export function Main() {
  const [text, setText] = useState("");
  const colorset = ["red", "green", "blue"];
  const [idx, setidx] = useState(Number(0));
  const [check, setcheck] = useState("OFF");
  const [ischeck, setischeck] = useState(false);
  const [count, setcount] = useState(0);
  const [list, setlist] = useState([]);
  const [input, setinput] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  function ChangeColor() {
    setidx((idx + 1) % colorset.length);
    document.documentElement.style.setProperty(
      "background-color",
      colorset[idx]
    );
  }

  function ChangeCheck() {
    setischeck(!ischeck);
    console.log(ischeck);
    if (!ischeck) {
      setcheck("ON");
    } else setcheck("OFF");
  }

  function ChangeCount() {
    if (count < 10) {
      setcount(count + 1);
    }
  }

  function ChageList() {
    if (input.trim() !== "") {
      setlist([...list, input]);
      setinput("");
    }
  }

  return (
    <div>
      <input type="text" onChange={changeText}></input>
      <p> 입력한 텍스트 : {text} </p>
      <button onClick={ChangeColor}> 배경 색상 변경 버튼 </button>
      <br />
      <br />
      <input
        type="checkbox"
        name="switch"
        value="swtich"
        onChange={(e) => ChangeCheck()}
      />{" "}
      체크박스 상태 : {check}
      <p>숫자 증가 : {count}</p>
      <button onClick={ChangeCount}> +1 </button>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={ChageList}> 리스트 추가</button>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}> {item} </li>
        ))}
      </ul>
    </div>
  );
}

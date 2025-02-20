//Ex.jsx

import { useEffect, useState, useRef } from "react";
import { debounce } from "lodash";

export function LifeCycleFunc() {
  const [count, setCount] = useState(0);
  let [timer, setTimer] = useState(0);
  const [windowSizeWid, setWindowSizeWid] = useState(window.innerWidth);
  const [windowSizeHei, setWindowSizeHei] = useState(window.innerHeight);

  useEffect(() => {
    console.log("컴포넌트가 마운트 되었습니다.");
  }, []);

  useEffect(() => {
    console.log(`상태 값 변경 : ${count}`);
  }, [count]);

  useEffect(() => {
    var time = setInterval(function () {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  const handleResize = debounce(() => {
    setWindowSizeWid(window.innerWidth);
    setWindowSizeHei(window.innerHeight);
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  //async/await 구문: JS에서 비동기적인 처리를 할 때 사용하는 구문
  //promise/then 구문:
  const getData = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());
      const sliceData = res.slice(0, 10);
      setData(sliceData);
    } catch (error) {
      console.error("데이터 로드 중 오류 발생: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>count : {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        +1
      </button>
      <p> timer : {timer}</p>
      <p> width: {windowSizeWid} </p>
      <p> height : {windowSizeHei} </p>
      <p> 상위 10개 포스트 가져오기 </p>
      <div>
        <ul>
          {data.map((it) => (
            <li key={it.id}>
              <b> id: </b> {it.id}
              <br />
              <b> title: </b> {it.title}
              <br />
              <b>body : </b> {it.body}
            </li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
}

export function Main() {
  return (
    <div>
      <LifeCycleFunc />
    </div>
  );
}

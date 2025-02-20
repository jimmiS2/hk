// 여러개 가져오기 방밥
//import * as E from "./1-element/Elements";
import * as Ex from "./1-element/Example";

function App() {
  //return E.E6;
  // 이 방식은 JSX로 렌더링 하지 않고 React 컴퍼넌트 자체 또는 jsx 요소로 작성된 변수를 반환하는 경우.

  // return <E.Hello name="홍길동" />;
  //이 방식은 REACT의 함수형 컴퍼넌트를 JSX 문법으로 홏ㄹ하여 반환하는 경우.

  const products = [
    { id: 1, name: "노트북", price: 8000 },
    { id: 2, name: "스마트폰", price: 4000 },
    { id: 3, name: "태블릿", price: 6000 },
  ];

  return (
    <>
      <Ex.Namecard />
      <Ex.Greeting firstName="홍길동" age="25" />
      <Ex.Price products={products} />
    </>
  );
}

export default App;

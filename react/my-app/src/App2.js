import React from "react";
import * as Ex from "./2-jsx/Example";

function App() {
  return (
    <>
      <Ex.Hello name="홍길동" />
      <Ex.Sum num1={3} num2={7} />
      <Ex.DrinkMachine price="2000" />
      <Ex.Greeting hour="17" />
    </>
  );
}

export default App;

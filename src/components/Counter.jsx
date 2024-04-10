import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // 증가하는 함수
  const Increase = () => {
    // 1씩 증가
    setCount(count + 1);
  };

  //감소함수
  const decrease = () => {
    //버튼 누르면 1씩 감소
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h>Counter 1</h>
      <hr></hr>
      <p>{count}</p>

      <button onClick={decrease}>-1</button>
      <button onClick={Increase}>+1</button>
    </div>
  );
};

export default Counter;

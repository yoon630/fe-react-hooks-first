import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter2 = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // useState와 useEffect를 둘다 사용해주셔서 진행해주시면 됩니다!
  const [count, setCount] = useState(0);

  const countNumber = () => {
    setCount(count + 1);
    console.log("Count 값이 변경되었습니다.");
  };

  // text 변경
  const [text, setText] = useState("");

  const handleTx = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    console.log("text 값이 변경되었습니다.");
  }, [text]);

  return (
    <div className="counter">
      <h>Counter 2</h>
      <hr></hr>
      <h3>{count}</h3>
      <button onClick={countNumber}>+1</button>
      <hr></hr>
      <input type={"text"} value={text} onChange={handleTx}></input>
      <h3>{text}</h3>
    </div>
  );
};

export default Counter2;

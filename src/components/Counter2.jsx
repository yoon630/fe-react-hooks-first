import React, { useState, useEffect } from 'react'

const Counter2 = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // useState와 useEffect를 둘다 사용해주셔서 진행해주시면 됩니다!

  return (
    <div className="counter">
      <h>Counter 2</h>
      <hr></hr>
      <h3>{/*카운트한 숫자가 들어가요*/}</h3>
      <button>+1</button>
      <hr></hr>
      <input type={'text'}></input>
      <h3>{/*카운트한 글자가 들어가요*/}</h3>
    </div>
  )
}

export default Counter2

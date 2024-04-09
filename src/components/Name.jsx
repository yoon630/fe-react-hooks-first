import React from 'react'

const Name = () => {
  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" />
      <input name="nickName" placeholder="닉네임을 입력해주세요" />
      <p>이름</p>
      <p>닉네임</p>
    </div>
  )
}

export default Name

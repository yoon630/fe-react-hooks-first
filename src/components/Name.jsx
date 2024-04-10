import React from "react";
import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");

  const myName = (e) => {
    setName(e.target.value);
  };

  const myNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input
        name="myName"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={myName}
      />
      <input
        name="nickName"
        placeholder="닉네임을 입력해주세요"
        value={nickName}
        onChange={myNickName}
      />
      <p>{`이름 ${name}`}</p>
      <p>{`닉네임 :${nickName}`}</p>
    </div>
  );
};

export default Name;

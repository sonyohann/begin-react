import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = {
    name: "",
    nickname: "",
  };
  const { name, nickname } = inputs;

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const onReset = () => {};

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
      </div>
    </div>
  );
}

export default InputSample;

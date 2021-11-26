import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = {
    name: "",
    nickname: "",
  };
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };

    setInputs(nextInputs);
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

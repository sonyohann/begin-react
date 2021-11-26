import React from "react";

function Hello({ color, name }) {
  return (
    <div
      style={{
        color: color,
      }}
    >
      안녕하세요 {name}
    </div>
  );
}

function defaultProps({ color, name }) {
  return <>name: '이름없음',</>;
}

export default Hello;

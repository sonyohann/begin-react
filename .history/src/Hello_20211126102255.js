import React from "react";

function Hello({ color, name }) {
  return (
    <div
      style={{
        color: props.color,
      }}
    >
      안녕하세요 {props.name}
    </div>
  );
}

export default Hello;

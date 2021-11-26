import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <div
      style={{
        color: color,
      }}
    >
      {isSpecial && "스페셜!!"}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;

import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <button>등록</button>
    </div>
  );
}

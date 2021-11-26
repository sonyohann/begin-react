import React from "react";

function UserList() {
  const users = [
    {
      id: 1,
      username: "sonyohan",
      email: "sonyohann@naver.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  return (
    <div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
    </div>
  );
}

import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{users[0].username}</b> <span>({users[0].email})</span>
    </div>
  );
}

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
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[2].email})</span>
      </div>
    </div>
  );
}

export default UserList;

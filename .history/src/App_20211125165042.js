import React, { useRef } from "react";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
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

  const ne

  return <UserList users={users} />;
}

export default App;

import React, { useState } from "react";
import UserForm from "./components/userForm/UserForm";
import UserList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "Noman", age: 24, id: "rand1" },
    { name: "Adnan", age: 22, id: "rand2" },
  ]);

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers((prev) => {
      return newUsers;
    });
  };
  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={users}  removeUser={removeUser} />
    </div>
  );
}

export default App;

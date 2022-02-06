import React from "react";
import User from "./User";

export const UserList = ({ users, removeUser }) => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} id={user.id} name={user.name} age={user.age} removeUser={removeUser}></User>
      ))}
    </div>
  );
};
export default UserList;

import React from "react";
import styles from "./User.module.css";

export const User = ({ id, name, age, removeUser }) => {
  return (
    <li
      onClick={() => removeUser(id)}
      className={styles.user}
    >{`${name} (${age} years old)`}</li>
  );
};
export default User;

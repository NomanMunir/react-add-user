import { useState } from "react";
import style from "./UserForm.module.css";

export const UserForm = ({addUser}) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim("").length === 0) {
      return alert("Name cannot be empty");
    }
    if (enteredAge.trim("").length === 0 || enteredAge < 0) {
      return alert("Name cannot be empty or a nagetive number");
    }
    const user = {
      name: enteredName,
      age: enteredAge,
      id: Math.random(),
    };
    addUser(user);
    setEnteredAge("");
    setEnteredName("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className={style["form-control"]}>
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={style["form-control"]}>
          <label>Age</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <button className={style.button} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};
export default UserForm;

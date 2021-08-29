import React, { useState, useRef } from "react";
import Wrapper from "../helpers/Wrapper";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";
import styles from "./addUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  /* the below lines are being used when we use state - useState */
  //   const [enteredUserName, setEnteredUserName] = useState("");
  //   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value)
    const enteredUName = nameInputRef.current.value;
    const enteredUAge = ageInputRef.current.value;

    if (enteredUName.trim().length === 0 || enteredUAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUAge < 18) {
      /* the reason why we add '+' is just
                to force the variable being used 
                to cast it to number.
            */
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 18).",
      });
      return;
    }
    // console.log(enteredUserName, enteredAge)
    props.onAddUser(enteredUName, enteredUAge);

    /* though it's not recommended to manipulate the DOM elements
        we can easily reset the field values like as below */
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    /* the below lines are being used when we use state - useState */
    // props.onAddUser(enteredUserName, enteredAge);
    // setEnteredUserName("");
    // setEnteredAge("");
  };

  //   const usernameChangeHandler = (event) => {
  //     setEnteredUserName(event.target.value);
  //   };

  //   const ageChangeHandler = (event) => {
  //     setEnteredAge(event.target.value);
  //   };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          {/* <button type='submit'>Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

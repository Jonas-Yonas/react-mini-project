import React, { useState, Fragment } from 'react'
import AddUser from './components/users/AddUser'
import UsersList from './components/users/UsersList'

const App = () => {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()} ]
    })
  }

  return (
    /*
      if you configured your project to support the
      empty tag (<> ... </>), you can simply use it
      in your project. Else and other wise, you can use
      the native React.Fragment wrapper like as shown below.
    */
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;

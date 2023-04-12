import React, { useState } from 'react';
import './style.css';

export default function ChildComp(props) {
  const [newUser, setNewUser] = useState({});

  const handleAddUserName = (name) => {
    setNewUser({ name, email: newUser.email });
  };

  const handleAddUserEmail = (email) => {
    setNewUser({ email, name: newUser.name });
  };

  const addNewUser = () => {
    const newUserDetail = { id: props.users.length + 1, ...newUser };
    props.setUser([...props.users, newUserDetail]);
    setNewUser({});
  };

  return (
    <>
      <div className="flexy">
        <div>
          <input
            type="text"
            value={newUser?.name || ''}
            placeholder="Enter Name"
            onChange={(event) => handleAddUserName(event.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="email"
            value={newUser?.email || ''}
            placeholder="Enter Email"
            onChange={(event) => handleAddUserEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={() => addNewUser()}>Add</button>
        </div>
      </div>
      <br></br>
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr key={user.id}>
                {user.id !== props.editUser.id ? (
                  <td>{user.name}</td>
                ) : (
                  <td>
                    <input
                      type="text"
                      value={props.editUser.name}
                      onChange={(event) =>
                        props.handleNameChange(user.id, event.target.value)
                      }
                    ></input>
                  </td>
                )}
                {user.id !== props.editUser.id ? (
                  <td>{user.email}</td>
                ) : (
                  <td>
                    <input
                      type="email"
                      value={props.editUser.email}
                      onChange={(event) =>
                        props.handleEmailChange(user.id, event.target.value)
                      }
                    ></input>
                  </td>
                )}
                <td>
                  {user.id !== props.editUser.id ? (
                    <button onClick={() => props.handleUserEdit(user)}>
                      edit
                    </button>
                  ) : (
                    <button onClick={() => props.handleUserUpdate()}>
                      save
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => props.handleUserDelete(user.id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

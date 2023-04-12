import React, { useState, useLayoutEffect } from 'react';
import './style.css';
import ChildComp from './ChildComp';
export default function App() {
  const userData = [
    {
      id: 1,
      email: 'soumya@gmail.com',
      name: 'soumya',
    },
    {
      id: 2,
      email: 'deepak@gmail.com',
      name: 'deepak',
    },
    {
      id: 3,
      email: 'ronak@gmail.com',
      name: 'ronak',
    },
  ];

  const [users, setUser] = useState(userData);
  const [editUser, setEditUser] = useState({});

  const handleUserEdit = (user) => {
    setEditUser(user);
  };

  const handleUserDelete = (id) => {
    setUser(users.filter((user) => user.id !== id));
  };

  const handleAddUser = (id) => {
    delete users.find((user) => user.id === id);
  };

  const handleNameChange = (id, name) => {
    setEditUser({ id, name, email: editUser.email });
  };

  const handleEmailChange = (id, email) => {
    setEditUser({ id, email, name: editUser.name });
  };

  const handleUserUpdate = () => {
    const userList = users;
    const index = users.findIndex((user) => user.id === editUser.id);
    userList[index] = editUser;
    setUser([...userList]);
    setEditUser({});
  };

  useLayoutEffect(() => {
    console.log('hello');
  }, []);

  return (
    <div>
      {console.log('hhshs')}
      <ChildComp
        users={users}
        setUser={setUser}
        editUser={editUser}
        handleUserEdit={handleUserEdit}
        handleUserDelete={handleUserDelete}
        handleAddUser={handleAddUser}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handleUserUpdate={handleUserUpdate}
      ></ChildComp>
    </div>
  );
}

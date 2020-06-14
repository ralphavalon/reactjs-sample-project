import React from 'react';
import './Users.css';

function Users(props) {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} - {user.city}</li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default Users;

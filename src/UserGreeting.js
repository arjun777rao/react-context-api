// UserGreeting.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserGreeting() {
  const { user } = useContext(UserContext);  // Access user data from context

  return <h1>Welcome, {user.name}!</h1>;
}

export default UserGreeting;

// UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const { user } = useContext(UserContext);  // Access user data from context

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;

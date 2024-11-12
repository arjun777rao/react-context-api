// UserContext.js
import React, { createContext, useState } from 'react';

// Create a UserContext
const UserContext = createContext();

// Create a provider component
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  });

  return (
    // Provide the user data and the ability to update it
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

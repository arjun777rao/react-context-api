import './App.css';
import { UserProvider } from './UserContext';  // Import the UserProvider
import UserProfile from './UserProfile';       // Import the UserProfile component
import UserGreeting from './UserGreeting';     // Import the UserGreeting component

function App() {
  return (
    // Wrap components with the UserProvider
    <UserProvider>
      <div>
        <UserGreeting />
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;

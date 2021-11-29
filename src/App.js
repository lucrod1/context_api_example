import React from "react";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      Context API Example
      <hr />
      <h2>Profile</h2>
      <Profile />
      <hr />
      <Login />
    </div>
  );
}

export default App;

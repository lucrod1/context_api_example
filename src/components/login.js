import React, { useState } from "react";
import { useAuth } from "../providers/auth";

function Login() {
  const { setUser } = useAuth();
  const [input, setInput] = useState("");

  const handleLogin = () => {
    localStorage.setItem("userLogged", JSON.stringify(input));
    setUser(input);
  };

  const handleLogout = () => {
    localStorage.removeItem("userLogged");
    setUser({ name: "" });
  };

  const changeUser = (event) => {
    setInput({ name: event.target.value });
  };

  return (
    <div>
      <input type="text" onChange={changeUser} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;

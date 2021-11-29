import React from "react";
import { useAuth } from "../providers/auth";

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h3>{user.name}</h3>
    </div>
  );
}

export default Profile;

import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Text } from "@chakra-ui/react"

function Profile() {
  const { user } = useAuth();

  return <div>
    <Text fontSize="22">Profile</Text>
    <code>
      {JSON.stringify(user)}
    </code><br></br>

  </div>;
}

export default Profile;

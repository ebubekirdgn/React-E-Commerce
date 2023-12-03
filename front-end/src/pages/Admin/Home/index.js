import React from "react";
import { useMatch } from "react-router-dom";

function Home() {
  const match = useMatch("/home");
  return (
    <>
      <h2>Admin Home</h2>
      {match && (
        <pre>
          <code>{JSON.stringify(match, null, 2)}</code>
        </pre>
      )}
    </>
  );
}

export default Home;

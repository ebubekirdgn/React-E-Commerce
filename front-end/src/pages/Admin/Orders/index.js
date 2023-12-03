import React from "react";
import { useMatch } from "react-router-dom";

function Orders() {
  const match = useMatch("/orders");

  return (
    <>
      <h2>Admin Orders</h2>
      {match && (
        <pre>
          <code>{JSON.stringify(match, null, 2)}</code>
        </pre>
      )}
    </>
  );
}

export default Orders;

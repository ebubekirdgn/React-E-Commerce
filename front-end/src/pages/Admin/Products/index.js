import React from "react";
import { useMatch } from "react-router-dom";

function AdminProducts() {
  const match = useMatch("/products");
  return (
    <>
      <h2>Admin Products</h2>
      {match && (
        <pre>
          <code>{JSON.stringify(match, null, 2)}</code>
        </pre>
      )}
    </>
  );
}

export default AdminProducts;

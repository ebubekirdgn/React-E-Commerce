import React from "react";
import { fetchOrders } from "../../../api";
import { useQuery } from "@chakra-ui/react";

function Orders() {
  const {isLoading,isError,data,error} = useQuery('admin:error',fetchOrders);

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div> Error {error.message}</div>
  }
  
  console.log(data)
  return (
    <>
      <h2>Admin Orders</h2>
    </>
  );
}

export default Orders;

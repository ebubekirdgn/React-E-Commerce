import React from "react";
import { fetchOrders } from "../../../api";
import { Tbody, Td, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
function Orders() {
  const { isLoading, isError, data, error } = useQuery(
    "admin:orders",
    fetchOrders
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div> Error {error.message}</div>;
  }

  console.log(data);
  return (
    <div>
      <Text fontSize="2xl">Orders</Text>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Satın alınan ürünler</TableCaption>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Address</Th>
              <Th isNumeric>Items</Th>
            </Tr>
          </Thead>
          {
            <Tbody>
              {data.map((item) => (
                <Tr key={item._id}>
                  <Td>{item.user?.email} </Td>
                  <Td>{item.adress} </Td>
                  <Td isNumeric>{item.items?.length}</Td>
                </Tr>
              ))}
            </Tbody>
          }
        </Table>
      </TableContainer>
    </div>
  );
}

export default Orders;

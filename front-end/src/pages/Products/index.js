import {
  Box,
  Flex,
  Grid,
  Button,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { fetchProductList } from "../../api";
import Card from "../../components/Card";
import { BallTriangle } from "react-loader-spinner";
import "alertifyjs/build/css/alertify.min.css";

function Products() {
  /* fetchProductList ile useQuery üzerinden fetch işlemi yaptık ancak bunu api.jsdeki axios ile yaptık */
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 12;
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });
 

  if (status === "loading")
    return (
      <Flex mt="10" justifyContent="center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </Flex>
    );

  if (status === "error") return "An error has occurred: " + error.message;
  return (
    <div>
  
  <SimpleGrid columns={1} spacing={10}>
  <Center bg='tomato' h='100px' color='white'>
  This is the Center
</Center>
</SimpleGrid>

      <Grid templateColumns="repeat(4, minmax(min-content, 1fr))" gap={0}>
        {/* {data.map((item, key) => (
          <Card key={key} item={item} />
        ))} */}

        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box w="100%" key={item._id}>
                <Card key={item._id} item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading More"
            : hasNextPage
            ? "Daha Fazla"
            : "Gösterilecek başka bir ürün yok"}
        </Button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </Flex>
    </div>
  );
}
export default Products;

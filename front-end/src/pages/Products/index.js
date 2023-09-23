import Card from "../../components/Card";
import { Grid } from "@chakra-ui/react";
import React from "react";

function Products() {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default Products;

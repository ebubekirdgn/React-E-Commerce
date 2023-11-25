import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import { fetchProduct } from "../../api";
import moment from "moment";

function ProductDetail() {
  const { product_id } = useParams(); // useParams ile id değerini cekip aldık

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>...Loading...</div>;
  }
  if (isError) {
    return <div>...Error...</div>;
  }

  const images = data.photos.map((url) => ({ original: url }));
  return (
    <div>
      <Box width="350px" height="200px">
        <ImageGallery items={images} />
      </Box>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <Text>{data.price}</Text>
      <p>{data.description}</p>
      <Button colorScheme="blue" variant="solid">
        Sepete Ekle
      </Button>
    </div>
  );
}

export default ProductDetail;

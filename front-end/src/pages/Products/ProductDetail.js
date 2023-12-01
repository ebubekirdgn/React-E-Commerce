import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  Badge,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import { fetchProduct } from "../../api";
import moment from "moment";
import { useBasket } from "../../contexts/BasketContext";

function ProductDetail() {
  const { product_id } = useParams(); // useParams ile id değerini cekip aldık
  const { addToBasket, items } = useBasket();
  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );
  const format = (val) => `₺` + val;
  const parse = (val) => val.replace(/^\$/, "");
  const [amount, setAmount] = React.useState("0");

  if (isLoading) {
    return <div>...Loading...</div>;
  }
  if (isError) {
    return <div>...Error...</div>;
  }

  const findBasketItem = items.find((item) => item._id === product_id);
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
      <Badge colorScheme="green" mt={2} mb={2}>
        <Text fontSize="2xl"> {data.price} ₺ </Text>
      </Badge>
      <NumberInput
        onChange={(valueString) => setAmount(parse(valueString))}
        value={format(amount)}
        max={50}
        size='xs'
        width={20}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <br />
      <p>{data.description}</p>
      <p>Value {amount}</p>
      <Button
        colorScheme={findBasketItem ? "red" : "blue"}
        variant="solid"
        onClick={() => addToBasket(amount,data, findBasketItem)}
      >
        {findBasketItem ? "Sepetten Sil" : "Sepete Ekle"}{" "}
      </Button>
    </div>
  );
}

export default ProductDetail;

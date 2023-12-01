import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Text,
  Button,
  Badge,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  Divider,
  CardFooter,
  Stack,
  Heading,
  Card,
  CardBody,
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import { fetchProduct } from "../../api";
import { useBasket } from "../../contexts/BasketContext";

function ProductDetail() {
  const { product_id } = useParams(); // useParams ile id değerini cekip aldık
  const { addToBasket, items } = useBasket();
  const { isLoading, isError, data } = useQuery(["product", product_id], () => fetchProduct(product_id));
  const parse = (val) => val.replace(/^\$/, "");
  const [amount, setAmount] = React.useState("0");
  const toast = useToast();

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
      <Card maxW="sm">
        <CardBody>
          <ImageGallery items={images} />
          <Stack mt="6" spacing="3">
            <Heading size="md">{data.title}</Heading>
            <Text>{data.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              <Badge colorScheme="green" mt={2} mb={2}>
                <Text fontSize="2xl"> {data.price} ₺ </Text>
              </Badge>
            </Text>
            <Text></Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justify="space-evenly" flexWrap="wrap">
          <Card align="right">
            <NumberInput
              onChange={(valueString) => setAmount(parse(valueString))}
              defaultValue={1}
              min={1}
              max={50}
              width={20}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Card>

          <Button
            colorScheme={findBasketItem ? "red" : "blue"}
            variant="solid"
            onClick={() => {
              addToBasket(amount, data, findBasketItem);
              if (findBasketItem) {
                toast({
                  title: "Ürün sepete eklenemedi",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: "Ürün sepete eklendi",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }
            }}
          >
            {findBasketItem ? "Sepetten Sil" : "Sepete Ekle"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductDetail;

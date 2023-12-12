import { Box, Image, Badge, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./styles.module.css";
// import { useBasket } from "../../contexts/BasketContext";
function Card({ item }) {
  // const { addToBasket, items } = useBasket();
  // const findBasketItem = items.find(
  //   (basket_item) => basket_item._id === item._id
  // );

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className={styles.box}
    >
      <Link to={`/product/${item._id}`}>
        <Image
          src={item.photos[0]}
          alt="Product"
          loading="lazy"
          className={styles.img}
        />
        <Box p="6">
          <Heading as="h4" size="md">
            {item.title}
          </Heading>
          <Box>
            <Text>
              <Badge variant="outline" fontSize="lg" colorScheme="green">
                {item.price} ₺{" "}
              </Badge>
            </Text>
          </Box>
        </Box>
      </Link>
      
      {/* <div className={styles.card}>
        <div className={styles.info}>
          <Button
            colorScheme="red"
            variant="outlined"
            onClick={() => addToBasket(item, findBasketItem)}
          >
            {findBasketItem ? "Sepetten Sil" : "Sepete Ekle"}
          </Button>
        </div>
      </div> */}
    </Box>
  );
}

export default Card;

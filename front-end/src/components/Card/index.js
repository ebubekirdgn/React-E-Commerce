import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";
import styles from "./styles.module.css";
import { useBasket } from "../../contexts/BasketContext";

function Card({ item }) {
  const { addToBasket, items } = useBasket();
  const findBasketItem = items.find((basket_item) => basket_item._id === item._id);

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
          <Box d="plex" alignItems="baseline">
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.title}
          </Box>
          <Box>{item.price} ₺ </Box>
        </Box>
      </Link>
      <div className={styles.card}>
        <div className={styles.info}>
          <Button colorScheme="red" variant="outlined" onClick={() => addToBasket(item, findBasketItem)}>{findBasketItem ? "Sepetten Sil" : "Sepete Ekle"}  </Button>
        </div>
      </div>
    </Box>
  );
}

export default Card;

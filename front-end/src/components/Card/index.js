import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";
import styles from "./styles.module.css";

function Card({ item }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className={styles.box}
    >
      <Link to="#">
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
      <Button colorScheme="blue">Sepete Ekle</Button>
    </Box>
  );
}

export default Card;

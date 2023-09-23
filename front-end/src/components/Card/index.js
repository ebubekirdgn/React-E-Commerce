import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#">
        <Image src="https://picsum.photos/400/200" alt="Product" />
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            12.12.2023
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Jack Jones Erkek Mont
          </Box>
          <Box>1450 TL</Box>
        </Box>
      </Link>
      <Button colorScheme="blue">Sepete Ekle</Button>
    </Box>
  );
}

export default Card;

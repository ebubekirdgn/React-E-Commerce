import React, { useState } from "react";
import { useBasket } from "../../contexts/BasketContext";
import {
  Alert,
  Box,
  Button,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";

function Basket() {
  const { items, removeFromBasket,emptyBasket } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  const [address,setAddress] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id) // Sepette olan bütün ürünlerin idlerini tutar
    const input = {
      address,
      items : JSON.stringify(itemIds)
    }
    await postOrder(input)
    emptyBasket();
    onClose();
  }
  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning">Sepette ürün bulunamadı</Alert>
      )}
      {items.length > 0 && (
        <>
          <ul style={{ listStyleType: "decimal" }}>
            {items.map((item) => (
              <li key={item._id} style={{ marginBottom: 10 }}>
                <Link to={`/product/${item._id}`}>
                  {item.title} - {item.price} ₺
                  <Image
                    htmlWidth={100}
                    src={item.photos[0]}
                    alt="Basket Items"
                    loading="lazy"
                  ></Image>
                </Link>

                <Button
                  mt="2"
                  size="sm"
                  colorScheme="pink"
                  onClick={() => removeFromBasket(item._id)}
                >
                  Sil
                </Button>
                <br />
                <br />
                <hr />
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontSize="22">
              Toplam Tutar : <b style={{ fontWeight: "bold" }}>{total} ₺ </b>{" "}
              <Button colorScheme="blue" onClick={onOpen}>
                Siparişi Tamamla
              </Button>
            </Text>

            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Adres Bilgisi</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Adres</FormLabel>
                    <Textarea ref={initialRef} placeholder="Adres" value={address} onChange={(e) => setAddress(e.target.value)}/>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
                    Kaydet
                  </Button>
                  <Button onClick={onClose}>İptal</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Basket;

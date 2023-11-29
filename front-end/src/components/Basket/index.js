import React from 'react'
import { useBasket } from '../../contexts/BasketContext';
import { Alert, Box, Button, Image,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function Basket() {
    const { items } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price, 0)

    return (

        <div>
            {items.length < 1 && <Alert status='warning'>Sepette ürün bulunamadı</Alert>}
            {items.length > 0 &&
                <>
                    <ul>
                        {items.map((item) => (
                            <li key={item._id}>
                                <Link to={`/product/${item._id}`}>{item.title} - {item.price} ₺
                                    <Image htmlWidth={100} src={item.photos[0]} alt='Basket Items'></Image></Link>
                                <Button mt="2" size="sm" colorScheme="pink" onClick={() => { }} >Sil</Button>
                                <br /><br />
                                <hr />
                            </li>
                        ))}
                    </ul>
                    <Box mt="10">
                        <Text fontSize="22"  >
                            Toplam Tutar : <b style={{ fontWeight: 'bold' }}>{total} ₺ </b>
                        </Text>
                    </Box>
                </>

            }

        </div>
    )
}

export default Basket
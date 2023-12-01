import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

function Error404() {
  return (
    <div><Alert status='error'>
    <AlertIcon />
    <AlertTitle>Oopps!Sayfa Bulunamadı</AlertTitle>
  </Alert></div>
  )
}

export default Error404
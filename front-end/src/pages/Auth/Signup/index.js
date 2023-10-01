import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEye, FaEyeDropper, FaInvision, FaEyeSlash } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleShowClickPassword = () => setShowPassword(!showPassword);
  const handleShowClickPasswordConfirm = () => setShowPasswordConfirm(!showPasswordConfirm);

  return (
    <Flex flexDirection="column" width="full" justifyContent="center">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Sign Up </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack spacing={4} p="1rem"backgroundColor="whiteAlpha.900" boxShadow="md">
              <FormControl  mt="4">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />}/>
                  <Input name="email" type="email" placeholder="Email Address" />
                </InputGroup>
              </FormControl>

              <FormControl  mt="4">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />}/>
                  <Input name="password" type={showPassword ? "text" : "password"}placeholder="Password"/>
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClickPassword}>
                      {showPassword ? <FaEye  />  :<FaEyeSlash/>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl  mt="4">
                <InputGroup> 
                  <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />}/>
                  <Input name="passwordConfirm" type={showPasswordConfirm ? "text" : "password"} placeholder="Password Confirm"/>
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClickPasswordConfirm}>
                      {showPasswordConfirm ? <FaEye  />  :<FaEyeSlash/>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button mt="4" w="full" type="submit" colorScheme='blue'>
                Sign Up</Button>
            </Stack>
          </form>
        </Box>
      </Stack>
     
    </Flex>
  );
}

export default Signup;

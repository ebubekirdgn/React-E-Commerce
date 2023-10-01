import React, { useState } from "react";
import {Flex,Heading,Input,Button,InputGroup,Stack,InputLeftElement,chakra,Box,FormControl,InputRightElement} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import validationSchema from "./validations"


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log(values);
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleShowClickPassword = () => setShowPassword(!showPassword);
  const handleShowClickPasswordConfirm = () =>
    setShowPasswordConfirm(!showPasswordConfirm);

  return (
    <Flex align="center" width="full" justifyContent="center">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Sign Up </Heading>
        <Box my={5} textAlign="center">
          <form onSubmit={formik.handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    name="email"
                    placeholder="Email Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </InputGroup>
              </FormControl>

              <FormControl >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleShowClickPassword}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    name="passwordConfirm"
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Password Confirm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleShowClickPasswordConfirm}
                    >
                      {showPasswordConfirm ? <FaEye /> : <FaEyeSlash />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button  w="full" type="submit" colorScheme="blue">
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signup;

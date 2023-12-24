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
  Alert,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { fetchLogin } from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const clientId = [process.env.clientId];

function Signin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [flag, setFlag] = useState(false);

  const onSuccess = (res) => {
    setName(res.profileObj["name"]);
    console.log("Success", res.profileObj);
    setFlag(true);
  };
  const onFailure = (res) => {
    console.log("Failed", res);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({
          email: values.email,
          password: values.password,
        });

        login(loginResponse);
        navigate("/profile");
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
      }
    },
  });

  return (
    <Flex align="center" width="full" justifyContent="center">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Sign In </Heading>
        <Box my={5}>
          {formik.errors.general && (
            <Alert status="error">{formik.errors.general}</Alert>
          )}
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
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
                  isInvalid={formik.touched.email && formik.errors.email}
                />
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
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </InputGroup>
            </FormControl>
            <Button w="full" type="submit" colorScheme="blue">
              Sign In
            </Button>
            { flag ? (
              <h2> Hello {name } </h2>
            ) : (
              <GoogleLogin
              onSuccess={onSuccess}
              onError={onFailure}
              clientId={clientId}
              buttonText="Google ile Giriş Yap"
            />
            )

            }
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}

export default Signin;

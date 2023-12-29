import React from "react";

import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../api";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FieldArray, Formik } from "formik";

function AdminProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["admin:product", product_id],
    () => fetchProduct(product_id)
  );

  if (isLoading) {
    return (
      <div>
        <Spinner size="xl" />
      </div>
    );
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }
  const handleSubmit = () => {
    console.log("Submitting");
  };

  return (
    <div>
      <Text fontSize="2xl">Edit</Text>
      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
        }}
        // ValidationSchema
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            <Box>
              <Box my="" textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel> Title </FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel> Description </FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel> Title </FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <FormControl mt="4">
                    <FormLabel>Photos</FormLabel>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photo, index) => (
                              <div key={index}>
                                <Input
                                  name={`photos.${index}`}
                                  value={photo}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                  width="3xl"
                                />
                                <Button
                                  ml="4"
                                  type="button"
                                  colorScheme="red"
                                  onClick={() => {
                                    arrayHelpers.remove(index);
                                  }}
                                >
                                  Sil
                                </Button>
                              </div>
                            ))}
                          <Button
                            mt="5"
                            type="button"
                            colorScheme="blue"
                            onClick={() => {
                              arrayHelpers.push("");
                            }}
                          >
                            Resim Ekle
                          </Button>
                          <Button
                            mt="5"
                            ml="3"
                            type="submit"
                            colorScheme="green"
                            isLoading={isSubmitting}
                          >
                            Update
                          </Button>
                        </div>
                      )}
                    />
                  </FormControl>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default AdminProductDetail;

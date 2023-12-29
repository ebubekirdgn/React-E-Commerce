import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from '@chakra-ui/react';
import { FieldArray, Formik } from 'formik';
import React from 'react'
import validationSchema from "./validations";
import { message } from "antd";
import { postProduct } from "../../../api";
import { useMutation, useQueryClient} from "react-query";

function NewProduct() {
    const queryClient = useQueryClient();

    const newProductsMutation = useMutation(postProduct, {
        onSuccess: () => queryClient.invalidateQueries("admin:products"),
      });
  
    const handleSubmit = async (values,bag) => {

        const newValues = {
            ...values,
            photos:JSON.stringify(values.photos)//Stringe cevirdik resmin yolunu
        }
        newProductsMutation.mutate(newValues, {
                  onSuccess: () => {
                    message.success({
                        content: "Ürün başarıyla eklendi...",
                        key: "product_id",
                        duration: "2",
                      });
                  },
                });
                
    };
  return (
    <div>
        <Text fontSize="2xl"> Yeni Ürün Oluştur</Text>
        <Formik
        initialValues={{
          title: "",
          description:  "",
          price:  "",
          photos: [],
        }}
        validationSchema={validationSchema}
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
                      isInvalid={touched.title && errors.title}
                    />
                    {touched.title && errors.title && (
                      <Text color="red.500">{errors.title}</Text>
                    )}
                  </FormControl>

                  <FormControl>
                    <FormLabel> Description </FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      value={values.description}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      isInvalid={touched.description && errors.description}
                    />
                    {touched.description && errors.description && (
                      <Text color="red.500">{errors.description}</Text>
                    )}
                  </FormControl>

                  <FormControl>
                    <FormLabel> Price </FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                      isInvalid={touched.price && errors.price}
                    />
                    {touched.price && errors.price && (
                      <Text color="red.500">{errors.price}</Text>
                    )}
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
                        </div>
                      )}
                    />
                  </FormControl>
                  <Button
                    mt="5"
                    width="full"
                    type="submit"
                    colorScheme="green"
                    isLoading={isSubmitting}
                  >
                    Kaydet
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  )
}

export default NewProduct
import * as yup from "yup";

const editScheme = yup.object().shape({
    title:yup.string().required(),
    description:yup.string().required().min(5),
    price:yup.number().required(),
})
export default editScheme;
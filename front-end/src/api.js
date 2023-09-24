import axios from "axios"

export const fetchProductList = async () => {
    const {data} = await axios.get('http://localhost:4000/product')
    return data;
}
export const fetchProduct = async (id) => {
    const {data} = await axios.get(`http://localhost:4000/product/${id}`)
    return data;
}
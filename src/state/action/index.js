import axios from "axios"

export const getAllProduct =  () => {
    return async (dispatch) => {
        const res = await axios.get("https://fakestoreapi.com/products")
        dispatch({
            type:"products",
            payload:res.data
        })
    }
}


export const catagoriesProducts =  (category) => {
    return async (dispatch) => {
        const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        dispatch({
            type:"catagories",
            payload:res.data
        })
    }
}
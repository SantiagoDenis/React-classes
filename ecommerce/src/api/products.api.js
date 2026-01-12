import apiGet from "./http"


export const getProductById = (id) => {
    return apiGet(`/products/${id}`)
}

export const getProducts = ({ offset=0, limit=30 }) => {
    return apiGet(`/products?limit=${limit}&skip=${offset}`)
}

export const getProductByCategory = (category) => {
    return apiGet(`/products/category/${category}`)
}

export const getRelatedProductsByCategory = (category) => {
    return apiGet(`/products/category/${category}?limit=5&skip=0`)
}
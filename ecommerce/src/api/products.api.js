import apiGet from "./http"


export const getProductById = (id, { signal } = {}) => {
    return apiGet(`/products/${id}`, { signal })
}

export const getProducts = ({ offset=0, limit=30 }, {signal}) => {
    return apiGet(`/products?limit=${limit}&skip=${offset}`, {signal})
}

export const getProductByCategory = (category, { signal } = {}) => {
    return apiGet(`/products/category/${category}`, { signal })
}

export const getRelatedProductsByCategory = (category, { signal } = {}) => {
    return apiGet(`/products/category/${category}?limit=5&skip=0`, { signal })
}
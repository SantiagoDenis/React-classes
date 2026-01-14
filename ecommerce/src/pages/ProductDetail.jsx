import { useParams } from "react-router-dom"
import useProductId from "../hooks/useProductId"
import { useState } from "react"

const ProductDetail = () => {
    const { id } = useParams()
    const {data: product, loading, error} = useProductId(id)
    const [count, setCount] = useState(1)
    console.log(product, loading, error)
    if (loading) return <p>cargando</p>
    return (
        <div className="detail" >
            <div className="detail__img">
                <span className="detail__img__badge detail__img__badge--left" > {product.category} </span>
                <span className="detail__img__badge detail__img__badge--right" >{product.discountPercentage}% OFF</span>
                <img src={`${product.images[0]}`} alt="" />
            </div>
            <div className="detail__info">
                <p className="detail__info__title" > {product.title} </p>
                <div>Tags: {product.tags.map((tag) => (
                    <span> {tag} </span>
                ))}</div>
                <span className="detail__info__rating" > {product.rating} </span>
                <p> {product.description} </p>

                <p>Aviable stock: {product.stock} </p>
                <span> {product.shippingInformation} </span>
                <div className="counter">
                    <p> Cantidad: {count} </p>
                    <button>+</button>
                    <button>-</button>
                    {count > 1 ? <p>Total: {count * product.price}</p> : <p> Price per unit: {product.price} </p> } 
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
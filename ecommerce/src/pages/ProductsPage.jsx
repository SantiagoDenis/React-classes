import { useState } from "react"
import { Link } from "react-router-dom"
import useProducts from "../hooks/useProducts"



const ProductsPage = ({filters, setFilters}) => {
    const [page, setPage] = useState(0)
    const limit = 20
    const offset = page * limit
    const { data:products, loading, error } = useProducts({ offset, limit })
    const { data: allProds } = useProducts()

    const handlePrev = () => {
        setPage(currentPage => Math.max(0, currentPage-1))
    }
    const handleNext = () => {
        setPage(currentPage => currentPage+1)
    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
    let productsFiltered = products
    if(filters.cat) productsFiltered = allProds.filter((product) => product.category === filters.cat)

    return (
        <>
            <h1>Products: Page {page+1}</h1>

            {filters.cat && <p onClick={() => setFilters(prev => ({...prev, cat: ''}))} >Mostrar todos</p>}

            <div className="shelf">
                {
                    productsFiltered.map((product) => (
                        <div className="card" key={product.id}>
                            <span>{product.category}</span>
                            <img src={product.images[0]} alt={product.title} />
                            <p className="card__title" >{product.title}</p>
                            <p>{product.price}</p>
                            <Link to={`/product/${product.id}`} >Go Buy</Link>
                        </div>
                    ))
                }
            </div>

            {!filters.cat && 
            <>
            <button onClick={handlePrev} disabled={page === 0} >Previous</button>
            <button onClick={handleNext} >Next</button>
            </>
            }
        </>
    )

    
}
export default ProductsPage
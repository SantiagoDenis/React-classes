import { useEffect, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import useProducts from "../hooks/useProducts"



const ProductsPage = ({filters, setFilters}) => {
    const [page, setPage] = useState(0)
    const limit = 20
    const offset = page * limit
    const { data:products, loading, error } = useProducts({ offset, limit })
    const { data: allProds = [] } = useProducts()

    useEffect(() => {
        setPage(0)
    }, [filters.cat, filters.minPrice, filters.maxPrice, filters.sort])

    const filteredAndSorted = useMemo(() => {
        let result = allProds

        if(filters.cat) result = result.filter(p => p.category === filters.cat)

        const min = filters.minPrice === '' ? '' : Number(filters.minPrice)
        const max = filters.maxPrice === '' ? '' : Number(filters.maxPrice)
        if(min && !Number.isNaN(min)) result = result.filter(p => Number(p.price) >= min)
        if(max && !Number.isNaN(max)) result = result.filter(p => Number(p.price) <= max)

        const sorted = [...result]
        switch (filters.sort) {
            case "rating-desc":
                sorted.sort((a,b) => (b.rating ?? 0) - (a.rating ?? 0))//Con el ?? me fijo si b.rating es undefined o null, uso 0
                break
            case "rating-asc":
                sorted.sort((a,b) => (a.rating ?? 0) - (b.rating ?? 0))
                break
             case "price-asc":
                sorted.sort((a, b) => Number(a.price) - Number(b.price));
                break
            case "price-desc":
                sorted.sort((a, b) => Number(b.price) - Number(a.price));
                break

            default:
                break
        }
        return sorted
    }, [allProds, filters])

    const totalPages = Math.ceil(filteredAndSorted / limit)

    const pageItems = useMemo(() => {
        return filteredAndSorted.slice(offset, (offset + limit))
    }, [filteredAndSorted, offset, limit])

    const handlePrev = () => {
        setPage(currentPage => Math.max(0, currentPage-1))
    }
    const handleNext = () => {
        setPage(currentPage => currentPage+1)
    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <h1>Products: Page {page+1}</h1>

            {(filters.cat || filters.minPrice || filters.maxPrice || filters.sort)
            && <p onClick={() => setFilters(prev => ({cat: '', minPrice: '', maxPrice: '', sort: ''}))} >Mostrar todos</p>}

            <div className="shelf">
                {
                    pageItems.map((product) => (
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
            <button onClick={handleNext} disabled={page >= totalPages -1} >Next</button>
            </>
            }
        </>
    )

    
}
export default ProductsPage
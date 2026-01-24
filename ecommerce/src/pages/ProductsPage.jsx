import { useEffect, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import useProducts from "../hooks/useProducts"
import { FaStarHalf, FaStar } from "react-icons/fa";




const ProductsPage = ({filters, setFilters}) => {
    const [page, setPage] = useState(0)
    const limit = 20
    const offset = page * limit
    const { data:products, loading, error } = useProducts({ offset, limit })
    const { data: allProds = [] } = useProducts()

    useEffect(() => {
        setPage(0)
    }, [filters.cat, filters.minPrice, filters.maxPrice, filters.sort, filters.search])

    const containsChars = (title, search) => {
        const text = title.toLowerCase().replace(/ /g, "")
        const query = search.toLowerCase().replace(/ /g, "")
        if(!query) return true

        const counts = Object.create(null)
        for(const char of text) {
            counts[char] = (counts[char] || 0) + 1
        }
        for (const char of query) {
            if(!counts[char]) return false
            counts[char]--
        }
        return true
    }

    const filteredAndSorted = useMemo(() => {
        let result = allProds

        if(filters.cat) result = result.filter(p => p.category === filters.cat)

        const min = filters.minPrice === '' ? '' : Number(filters.minPrice)
        const max = filters.maxPrice === '' ? '' : Number(filters.maxPrice)
        if(min && !Number.isNaN(min)) result = result.filter(p => Number(p.price) >= min)
        if(max && !Number.isNaN(max)) result = result.filter(p => Number(p.price) <= max)
        if(filters.search) result = result.filter((prod) => {
            return containsChars(prod.title, filters.search)
        })

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

    const totalPages = Math.ceil(filteredAndSorted.length / limit)

    const pageItems = useMemo(() => {
        return filteredAndSorted.slice(offset, (offset + limit))
    }, [filteredAndSorted, offset, limit])

    const handlePrev = () => {
        setPage(currentPage => Math.max(0, currentPage-1))
    }
    const handleNext = () => {
        setPage(currentPage => currentPage+1)
    }
    const renderStars = (rating) => {
        const stars = []
        for(let i = 0; i < Math.floor(rating); i++) {
            stars.push(
                <li key={i} ><FaStar className="card__rating__star" /></li>
            )
        }
        if(rating % 1 >= 0.5) stars.push(<li key="half star"> <FaStarHalf className="card__rating__star" /> </li>)

        return <ul className="card__rating__stars">{stars}</ul>

    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
    return (
        <>
            <header className="page-head">

                <p className="page-head__subtitle">
                    Page <span className="page-head__pill">{page + 1}</span> of {totalPages}
                </p>

                {(filters.cat || filters.minPrice || filters.maxPrice || filters.sort || filters.search) && (
                    <button
                    className="page-head__clear"
                    onClick={() => setFilters({ cat: "", minPrice: "", maxPrice: "", sort: "", search: "" })}
                    type="button"
                    >
                    Quitar filtros
                    </button>
                )}
            </header>

            <div className="shelf">
                {
                    filteredAndSorted.length ?
                    pageItems.map((product) => (
                        <div className="card" key={product.id}>
                            <span>{product.category}</span>
                            <img src={product.images[0]} alt={product.title} />
                            <p className="card__title" >{product.title}</p>
                            <p className="card__price">${product.price}</p>
                            <div className="card__rating">Rating: {renderStars(product.rating)} ({product.rating})</div>
                            <Link to={`/product/${product.id}`} >Go Buy</Link>
                        </div>
                    ))
                    :
                    <>Hola no encontramos ese producto reineguen</>
                }
            </div>

            
            
            <div className="pager">
                <button className="pager__btn" onClick={handlePrev} disabled={page === 0} type="button">
                    Previous
                </button>

                <div className="pager__status">
                    <span className="pager__dot" aria-hidden="true" />
                    <span>
                    {page + 1} / {totalPages}
                    </span>
                </div>

                <button className="pager__btn" onClick={handleNext} disabled={page >= totalPages - 1} type="button">
                    Next
                </button>
            </div>
            
        </>
    )

    
}
export default ProductsPage
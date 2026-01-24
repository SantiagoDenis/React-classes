import { useState } from "react"
import useCategories from "../hooks/useCategories"
import {Link} from 'react-router-dom'
import { TbSortDescending, TbSortAscending } from "react-icons/tb";


const Sidebar = ({filters, setFilters}) => {
    const [collapse, setCollapse] = useState(false)
    const [isRAsc, setIsRAsc] = useState(true)
    const [isPAsc, setIsPAsc] = useState(true)
    const {cat: categories, loading } = useCategories()

    const handleCollapse = () => {
        setCollapse(prev => !prev)
    }
    const handleROrder = () => {
        setIsRAsc(prev => !prev)
        if(isRAsc) setFilters(prev => ({...prev, sort: "rating-asc"}))
        else setFilters(prev => ({...prev, sort: "rating-desc"}))
    }
    const handlePOrder = () => {
        setIsPAsc(prev => !prev)
        if(isPAsc) setFilters(prev => ({...prev, sort: "price-asc"}))
        else setFilters(prev => ({...prev, sort: "price-desc"}))
    }

    return (
        <>
            <button onClick={handleCollapse} className={`btn-collapse ${collapse ? 'btn-collapse--open' : ''}`}> {collapse ? ">" : "<"} </button>
            
            <div className={`sidebar ${collapse ? "sidebar--open" : "sidebar--closed"}`}>
                <div className="sidebar__categories">
                    <h2>Categorias:</h2>
                    {!loading && categories.map((cat) => <Link className="sidebar__link sidebar__categories__link" to={'/'} key={cat} onClick={() => setFilters(prev => ({...prev, cat: cat}))} >{cat}</Link>)}
                </div>
                <div className="sidebar__filters">
                    <h2>Filtros</h2>
                    <button className="sidebar__btn sidebar__btn--rating" onClick={handleROrder} > {isRAsc ? <>Rating: <TbSortAscending/></> : <>Rating: <TbSortDescending /></> } </button>
                    <button className="sidebar__btn sidebar__btn--price" onClick={handlePOrder} > {isPAsc ? <>Price: <TbSortAscending/></> : <>Price: <TbSortDescending /></> } </button>
                </div>
            </div>
            
            {filters.cat && 
                <p onClick={() => setFilters(prev => ({...prev, cat: ''}))} >
                    <Link to={'/'}>Mostrar todos</Link>
                </p>
            }


        </>
    )
}

export default Sidebar
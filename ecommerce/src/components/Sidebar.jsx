import { useState } from "react"
import useCategories from "../hooks/useCategories"
import {Link} from 'react-router-dom'


const Sidebar = ({filters, setFilters}) => {
    const [collapse, setCollapse] = useState(false)

    const handleCollapse = () => {
        setCollapse(prev => !prev)
    }


    const {cat: categories, loading } = useCategories()
    console.log(categories)

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
                    <Link className="sidebar__link sidebar__link__rating" to={'/'} onClick={() => handleFilters(cat)} >Rating Asc</Link>
                    <Link className="sidebar__link sidebar__link__shipping" to={'/'} onClick={() => handleFilters(cat)} >Shipping time Asc</Link>
                    <Link className="sidebar__link sidebar__link__price" to={'/'} onClick={() => handleFilters(cat)} >Price Asc</Link>
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
import { useState } from "react"
import useCategories from "../hooks/useCategories"


const Sidebar = ({category, setCategory}) => {
    const [collapse, setCollapse] = useState(false)

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    const handleCat = (cat) => {
        setCategory(cat)
        console.log(cat)
    }

    const {cat: categories, loading, error} = useCategories()
    console.log(categories)

    return (
        <aside>
            <button onClick={handleCollapse} className={`btn-collapse ${collapse && 'btn-collapse--modal'}`}> {"<"} </button>
            {collapse 
            &&
                <div className="sidebar">
                    {!loading && categories.map((cat) => <p key={crypto.randomUUID()} onClick={() => handleCat(cat)} >{cat}</p>)}
                </div>
            }
            {category && <p onClick={() => setCategory('')} >Mostrar todos</p>}


        </aside>
    )
}

export default Sidebar
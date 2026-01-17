import { useState, useEffect } from "react";
import { getProductCategories } from "../api/products.api";

const useCategories = () => {
    const [cat, setCat] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        const load = async() => {
            try {
                setLoading(true)
                setError(null)
                const res = await getProductCategories()
                setCat(res)
            } catch(e) {
                e.name !== 'AbortError' && setError(e)
            } finally {
                setLoading(false)
            }          
        }
        load()

        return () => controller.abort()
    }, [])

    return {cat, loading, error}
}

export default useCategories
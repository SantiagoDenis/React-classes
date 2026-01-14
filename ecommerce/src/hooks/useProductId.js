import { useState, useEffect } from "react";
import { getProductById } from "../api/products.api";

const useProductId = (id) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!id) return
        const controller = new AbortController()

        const load = async () => {
            try{
                setLoading(true);
                setError(null);
                const prod = await getProductById(id, {signal: controller.signal})
                setData(prod)
            } catch(e) {
                if(e.name !== "AbortError") setError(e)
            } finally {
                setLoading(false)
            }
        }
        load()

        
        return () => controller.abort()
    }, [id])
    return { data, loading, error }
}
export default useProductId
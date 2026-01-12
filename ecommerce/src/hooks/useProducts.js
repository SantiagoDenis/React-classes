import {useState, useEffect} from 'react'
import { getProducts } from '../api/products.api'


const useProducts = ({ offset=0, limit=12 } = {}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        const load = async () => {
            try{
                setLoading(true)
                setError(null)
                const result = await getProducts({ offset, limit }, {signal: controller.signal})
                setData(result.products)
            } catch(err) {
                if(err.name !== 'AbortError') setError(err)
            } finally {
                setLoading(false)
            }
        }
        load()

        return () => controller.abort()
    }, [offset, limit])

    return { data, loading, error }
}
export default useProducts
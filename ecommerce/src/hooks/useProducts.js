import {useState, useEffect} from 'react'
import { getProducts } from '../api/products.api'


const useProducts = ({ offset=0, limit=0 } = {}) => {
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


const BASE_URL = 'https://jsonplaceholder.typicode.com'

/* try{
    //codigo que puede fallar
} catch(error) {
    //se ejecuta solo si hubo error, y lo toma a ese error que hubo
} finally {
    //siempre se ejecuta, al final
} */

try {
    console.log("A")
    throw new Error("Boom")
    console.log("B")
} catch(error) {
    console.log("C")
} finally {
    console.log("D")
}

const getApi = async(spec, {signal} = {}) => {
    const path = `${BASE_URL}${spec}`
    try{
        const res = await fetch(path, {signal})
        console.log(signal)
        console.log(res)
        if(!res.ok) throw new Error(`Couldnt resolve the request to ${path}`)
        const data = await res.json()
        console.log(data)
        return data
    }catch(err){
        console.error('Request failed',err)
        if(err.name === 'AbortError') {
            return [] //retornar el caso base de con lo que trabajas
        }
        throw err //hablar de errores silenciosos; esto equivale a Promise.reject(err)
    } finally {
        console.log('Request ended')
    }
}

const callToApi = async(path) => {
    const controller = new AbortController()
    console.log(controller)
    
    const promise = getApi(path, {signal: controller.signal})
    setTimeout(() => controller.abort(), 100)
    try{
        const data = await promise
        console.log('Data', data)
        return data
    } catch(error) {
        console.log("Error handled in caller")
        //El throw new Error() te da una instancia del error, un objeto que tiene el nombre, la traza del stack 
        console.error("The error is:", error.message, "It happened at:", error.stack)
        return []
    }

}

const getUsers = () => callToApi('/users')
const getComments = () => callToApi('/comments')
const getPosts = () => callToApi('/posts')

const renderizarAlgoConLaData = async() => {
    const data = await getUsers()
    if(!data) return console.log("No data (aborted or failed)")
    console.log(data.filter((user) => user.address.suite.includes("Apt")))
}

renderizarAlgoConLaData()


//Errores posibles:
//const getUsers = () => callToApi('/usrs')
//setTimeout(() => controller.abort(), 0)

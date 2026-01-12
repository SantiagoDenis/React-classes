
const BASE_URL = "https://dummyjson.com"

const apiGet = async(path, { signal } = {}) => {
    const res = await fetch(`${BASE_URL}${path}`, { signal })
    if(!res.ok) {
        let message = `HTTP ${res.status}`
        try {
            const data = await res.json()
            message = data?.message ?? message
        } catch {
        }
        throw new Error(message)
    }
    return res.json();
}
export default apiGet
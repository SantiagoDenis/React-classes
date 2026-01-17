
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import Layout from './components/Layout'
import { useState } from 'react'

function App() {
  const [filters, setFilters] = useState({
    cat: '',
    minPrice: null,
    maxPrice: null,
    sort: '',
    rating: null,
    shipping: null
  })
  return (
    <Routes>
      <Route element={<Layout filters={filters} setFilters={setFilters} />}>
        <Route index element={<ProductsPage filters={filters} setFilters={setFilters}/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Route>
    </Routes>
  )
}

export default App

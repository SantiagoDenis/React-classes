
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import Layout from './components/Layout'
import { useState } from 'react'

function App() {
  const [category, setCategory] = useState('')
  return (
    <Routes>
      <Route element={<Layout category={category} setCategory={setCategory} />}>
        <Route index element={<ProductsPage category={category} setCategory={setCategory}/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Route>
    </Routes>
  )
}

export default App

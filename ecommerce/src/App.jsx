
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<ProductsPage/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Route>
    </Routes>
  )
}

export default App

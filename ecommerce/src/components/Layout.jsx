import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = ({filters, setFilters}) => {

    return (
        <>
            <Header filters={filters} setFilters={setFilters}/>
            <Sidebar filters={filters} setFilters={setFilters}/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout
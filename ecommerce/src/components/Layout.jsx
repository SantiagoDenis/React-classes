import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = ({category, setCategory}) => {

    return (
        <>
            <Header/>
            <Sidebar category={category} setCategory={setCategory}/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout
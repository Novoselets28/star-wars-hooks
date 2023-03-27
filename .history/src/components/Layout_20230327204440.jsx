import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <header>
            <Link to='/'>Home</Link>
            <Link to='people'>People</Link>
            <Link to='planets'>Planets</Link>
            <Link to='starhips'>Starships</Link>
            <Link to='login'>Login</Link>
        </header>
        <Outlet/>
        </>
    )
}

export default Layout;
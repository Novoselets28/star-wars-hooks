import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <header>
            <Link to='home'>Home</Link>
            <Link to='people'>People</Link>
            <Link to='planets'>Planets</Link>
            <Link to='starships'>Starships</Link>
        </header>
        <Outlet/>
        </>
    )
}

export default Layout;
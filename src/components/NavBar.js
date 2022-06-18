import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <header>
            <Link to="/">
            <h1 className="brand">ViperG</h1>
            </Link>
            <ul>
                <li>
                    <NavLink to="/category/remeras">Remeras</NavLink>
                </li>
                <li>
                    <NavLink to="/category/pantalones">Pantalones</NavLink>
                </li>
                <li>
                    <NavLink to="/category/zapatillas">Zapatillas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/accesorios">Accesorios</NavLink>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar
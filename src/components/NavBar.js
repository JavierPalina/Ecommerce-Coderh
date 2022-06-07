import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header>
            <h1 className="brand">ViperG</h1>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Ayuda</a>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header>
            <h1 className="brand">ViperG</h1>
            <ul>
                <li>
                    <a href="#">Link 1</a>
                </li>
                <li>
                    <a href="#">Link 2</a>
                </li>
                <li>
                    <a href="#">Link 3</a>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar
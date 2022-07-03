import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
const Context = useContext(cartContext)
    return (
        <Link to="/cart">
            <div className={Context.cart.length === 0 ? "visible-hidden" : "container-cart"}>
                <span className="cart material-symbols-outlined">shopping_cart</span>
                <p>{Context.totalQuantity}</p>
            </div>
        </Link>
    )
}

export default CartWidget
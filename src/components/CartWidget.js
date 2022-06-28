import { useContext } from "react";
import { cartContext } from "../context/cartContext";

const CartWidget = () => {
    const resultContext = useContext(cartContext);
    console.log('ContextEnCartWidget', resultContext);

    return (
        <div className="container-cart">
            <span className="cart material-symbols-outlined">shopping_cart</span>
        </div>
    )
}

export default CartWidget
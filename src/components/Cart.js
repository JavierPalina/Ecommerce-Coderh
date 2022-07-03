import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, removeItem, clear, totalPrice} = useContext(cartContext)
    console.log(cart)
    return (
        <div className="ListContainer">
            {cart.length ? (
                <>
                <h1>Detalle de su orden</h1>
                    {cart.map(item =>
                        <div className="margin" key={item.id}>
                            <div className="containerItemCart">
                                <img src={item.pictureUrl} alt={item.title} className="image"/>
                                <div className="info">
                                    <h6 className="quantityCart2">${item.price * item.quantity}</h6>
                                    <h3>{item.title}</h3>
                                    <p className="descriptionCart">{item.description}</p>
                                    <h4>${item.price}</h4>
                                    <h6 className="quantityCart"><small>x   </small>{item.quantity}</h6>
                                    <button className='customButton' onClick={() => removeItem(item.id)}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>Eliminar</button>
                                </div>
                             </div>
                        </div>
                    )}
                        <div className="containerButtons">
                            <button className="deleteCart" onClick={() => clear(cart)}>Vaciar carrito</button>
                            <Link to='/'>
                                <button className="deleteCart">Seguir comprando</button>
                            </Link>
                            <Link to='/'>
                                <button className='deleteCart2'><b>Finalizar compra</b></button>
                            </Link>
                            <strong>Total: <small></small>{totalPrice}</strong><br/>
                        </div>
                </>
            ) : 
            <div className="containerCartVacio">
                <h2 className='carroVacio'>Su carrito esta vacio</h2>
                <img src="carritovacio.jpg" className="imgCart"/>
                <Link to='/'>
                    <button className="addShop-3">Buscar productos</button>
                </Link>
            </div>}
        </div>
    )
}

export default Cart
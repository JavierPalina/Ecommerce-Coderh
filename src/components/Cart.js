import { useContext, useState } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from 'react-router-dom'
import CheckOut from "./CheckOut"

const Cart = () => {
    const [Modal, setModal] = useState(false)
    const {cart, removeItem, clear, totalPrice} = useContext(cartContext)
    console.log(cart)
    const [orderId, setOrderId] = useState('')

    if (orderId !== '') {
        return (
            <div className="overlay">
                <div className="modal">
                    <div className="textCont">
                    <h1 className="apolog">Gracias por tu compra, tu número de envío es:</h1>
                    <b>{orderId}</b>
                    </div>
                    <img src="carritocompra.jpg" alt="carritoImg" className="imgCart2"/>
                    <Link to='/'>
                        <button className="deleteCart2 auto">Volver a productos</button>
                    </Link>
                </div>  
            </div>
        )
    }
    else {
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
                                <button className='deleteCart2' onClick={() => setModal(!Modal)}><b>Finalizar compra</b></button>
                            <CheckOut estado={Modal} 
                             cambiarEstado={setModal}
                             setOrderId={setOrderId}
                            />
                            <strong>Total: <small></small>{totalPrice}</strong><br/>
                        </div>
                </>
            ) : 
            <div className="containerCartVacio">
                <h2 className='carroVacio'>Su carrito esta vacio</h2>
                <img src="carritovacio.jpg" alt="Carrito vacio" className="imgCart"/>
                <Link to='/'>
                    <button className="addShop-3">Buscar productos</button>
                </Link>
            </div>}
        </div>
    )}
}

export default Cart
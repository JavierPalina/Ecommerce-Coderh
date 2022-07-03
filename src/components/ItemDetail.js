import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { cartContext } from '../context/cartContext'

const ItemDetail = ({ pictureUrl, title, stock, price, description, id}) => {
  const Context = useContext(cartContext)
  const [monto, setMonto] = useState(0)
  
  const onAdd = (cantidadSeleccionada) => {
    setMonto(cantidadSeleccionada)
    // const ItemToAdd = {
    //   quantity : cantidadSeleccionada,
    // }
  }

  const agregarAlCarrito = () => {
    Context.addItem({ id, title, price, pictureUrl, description }, monto)
  }

  return (
    <div className="cardContainer detail">
        <div className="containerImage">
            <img src={pictureUrl} alt={title} className="detail-image" />
        </div>
        <div className="producto">
            <h3 className="name detail-name">{title} <small>({stock} disponibles)</small></h3>
            <p className="price">${price}</p>
            <p className="description">{description}</p>
            {monto < 1 ? (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            ) : (
            <div>
              <Link to="/"><button className="addShop-2">Volver a Productos</button></Link>
              <Link to="/cart"><button className="addShop-2" onClick={agregarAlCarrito}>Finalizar mi compra</button></Link>
            </div>
            )}
        </div>
    </div>
  )
}

export default ItemDetail
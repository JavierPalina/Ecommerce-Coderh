import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { cartContext } from '../context/cartContext'


const ItemDetail = ({ pictureUrl, title, stock, price, description, id}) => {
  const[added, setAdded] = useState(false)
  const Context = useContext(cartContext)

  const onAdd = (cantidadSeleccionada) => {
    Context.addItem({ id, title, price, pictureUrl, description }, cantidadSeleccionada)
    setAdded(true)
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
            {!added ? (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            ) : (
            <div>
              <Link to="/"><button className="addShop-2">Volver a Productos</button></Link>
              <Link to="/cart"><button className="addShop-2">Finalizar mi compra</button></Link>
            </div>
            )}
        </div>
    </div>
  )
}

export default ItemDetail
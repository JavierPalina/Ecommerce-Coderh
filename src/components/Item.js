import { Link } from "react-router-dom"

const Item = ({id, title, price, stock, pictureUrl}) => {
  return (
    <div className="cardContainer2">
        <div className="containerImage">
            <img src={pictureUrl} alt={title} className="image"/>
        </div>
        <div className="product">
            <h3 className="Item-name">{title} <small>({stock})</small></h3>
            <p className="Item-price">${price}</p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    </div>
  )
}

export default Item
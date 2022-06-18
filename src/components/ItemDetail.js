import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ pictureUrl, title, stock, price, description}) => {
  return (
    <>
    <div className="cardContainer detail">
        <div className="containerImage">
            <img src={pictureUrl} className="detail-image" />
        </div>
        <div className="producto">
            <h3 className="name detail-name">{title} <small>({stock} disponibles)</small></h3>
            <p className="price">{price}</p>
            <p className="description">{description}</p>
            <ItemCount stock={stock} initial={1} onAdd={()=>{}} />
        </div>
    </div>
    </>
  )
}

export default ItemDetail
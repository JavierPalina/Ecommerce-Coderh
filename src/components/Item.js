import ItemCount from './ItemCount';

const Item = ({title, price, stock, pictureUrl, description}) => {
  return (
        <div className="cardContainer">
            <div className="containerImage">
                <img src={pictureUrl} className="image"/>
            </div>
            <div className="product">
                <h3 className="name">{title} <small>({stock})</small></h3>
                <p className="price">{price}</p>
                <p className="description">{description}</p>
                <ItemCount stock={stock} initial={1} onAdd={()=>{}} />
            </div>
        </div>
  )
}

export default Item
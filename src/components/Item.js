import ItemCount from './ItemCount';

const item = ({title, price, stock, pictureUrl, description}) => {
  return (
        <div className="cardContainer">
            <div className="containerImage">
                <img src={pictureUrl} className="image" alt="" />
            </div>
            <div className="producto">
                <h3 className="nombre">{title} <small>({stock})</small></h3>
                <p className="precio">{price}</p>
                <p className="descripcion">{description}</p>
                <ItemCount stock={stock} initial={1} onAdd={()=>{}} />
            </div>
        </div>
  )
}

export default item
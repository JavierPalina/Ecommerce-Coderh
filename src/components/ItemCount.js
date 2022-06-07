import React, { useState } from 'react';

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial);

    const aumentarContador = () => {
        setContador(contador + 1)
        if(contador >= props.stock) {
            setContador(props.stock)
        }
    }

    const bajarContador = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

return (
    <>
        <div className="container-itemCount">
            <div className="container-button">
                <button onClick={bajarContador}>-</button>
                <p className="contador">{contador}</p>
                <button onClick={aumentarContador}>+</button>
            </div>
            <button className="addShop">Agregar al carrito</button>
        </div>
    </>
)
}

export default ItemCount
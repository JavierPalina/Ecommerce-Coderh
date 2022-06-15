import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { Productos } from './Productos';

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const MocAsync = new Promise((res) => {
            setTimeout(() => {
                const productosDeDB = Productos
                res(productosDeDB)
            }, 2000)
    })

        MocAsync.then(items => {
            setItems(items)
        })
    },[])

    if(items.length > 0) {
        return (
            
                <div className="ListContainer">
                    <h1>{props.greeting}</h1>
                    <div className="Products">
                        <ItemList items={items}/>
                    </div>
                </div>

    )

    } else {
        return (
            <>
             <div className="container">
                <div className="containerLoad">
                    <h3>Cargando productos...</h3>
                    <div className="loader">
                        <div className="inner one"></div>
                        <div className="inner two"></div>
                        <div className="inner three"></div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ItemListContainer
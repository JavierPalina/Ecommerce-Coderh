import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { Productos } from './Productos';
import { useParams   } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    useEffect(() => {
        setLoading(true);
        const MocAsync = new Promise((res) => {
            setTimeout(() => {
                res(category ? Productos.filter(prod => prod.category === category) : Productos);
            }, 2000)
        })
        MocAsync.then(items => {
            setItems(items)
            setLoading(false)
        })
    },[category])

    if(loading) {
            return (
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
            )
    } else {
        return (
        <div className="ListContainer">
                    <h1>{props.greeting}</h1>
                    <div className="Products">
                        <ItemList items={items}/>
                    </div>
                </div>
        )
    }
}

export default ItemListContainer
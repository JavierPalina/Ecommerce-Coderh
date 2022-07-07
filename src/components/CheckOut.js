import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useContext } from 'react';
import { cartContext } from "../context/cartContext"

export const CheckOut = ({cambiarEstado, estado, setOrderId}) => {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const resultContext = useContext(cartContext);

  const cartCheckout = [];
  resultContext.cart.forEach((element) => {
    cartCheckout.push({
      id: element.id,
      title: element.title,
      price: element.price,
      quantity: element.quantity,
    });
  });
  // console.log(cartCheckout)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarEstado(estado)

    const orderData = {
      buyer: {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
      },
      items: cartCheckout,
      total: resultContext.totalPrice,
      date: serverTimestamp(),
    };

    const collectionOrders = collection(db, 'ordenes');
    addDoc(collectionOrders, orderData)
      .then((response) => {
        setOrderId(response.id);
        resultContext.clear();
      })
      .catch((error) => {
        console.log(error);
      })
  } 
      return ( 
      <>
        {estado&&
      <div className='overlay'>
                 <div className='modal'>
                   <h1 className='titulo'>Ingrese sus datos</h1>
                   <form className='form'>
                     <div className='inputGroup'>
                       <label>Nombre</label>
                       <input 
                       onChange={handleChange} 
                       value={userData.name} 
                       name="name" 
                       type='text' 
                      placeholder='Ingrese su nombre'/>
                     </div>
                     <div className='inputGroup'>
                       <label>Número</label>
                       <input 
                       onChange={handleChange} 
                       value={userData.phone} 
                       name="phone" 
                       type='number' 
                       placeholder='Ingrese su número'/>
                     </div>
                     <div className='inputGroup'>
                       <label className='emailLabel'>Email</label>
                       <input 
                       onChange={handleChange} 
                       value={userData.email} 
                       name="email" 
                       type='email' 
                       placeholder='Ingrese su correo electronico'/>
                     </div>
                     <div className="buttonContainer">
                       <button className='deleteCart' onClick={() => cambiarEstado(false)}>Volver</button>
                       <button className="deleteCart2" onClick={handleSubmit}>Enviar</button>
                     </div>
                   </form>
                 </div>
         			</div>
      }
      </>
      )}

export default CheckOut
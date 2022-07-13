import React, { useState, useContext } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { cartContext } from "../context/cartContext"

export const CheckOut = ({setModal, Modal, setOrderId}) => {
  const [Input, setInput] = useState({valido: null})

  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    email2: '',
  })

  const Context = useContext(cartContext)

  const cartCheckout = []
  Context.cart.forEach((element) => {
    cartCheckout.push({
      id: element.id,
      title: element.title,
      price: element.price,
      quantity: element.quantity,
    })
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setModal(Modal)

    const orderData = {
      buyer: {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
      },
      items: cartCheckout,
      total: Context.totalPrice,
      date: serverTimestamp(),
    }

    const collectionOrders = collection(db, 'ordenes')
    addDoc(collectionOrders, orderData)
      .then((response) => {
        setOrderId(response.id)
        Context.clear()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  const validationInputs = () => {
    if (userData.email.length > 0) {
      if(userData.email !== userData.email2) {
        setInput((prevState) => {
					return {...prevState, valido: 'false'}
				})
      }
      else {
        setInput((prevState) => {
					return {...prevState, valido: 'true'}
				})
      }
    }
  }
      return ( 
      <div>
        {Modal&&
          <div className='overlay'>
            <div className='modal'>
              <h1 className='titulo'>Ingrese sus datos</h1>
              <form className='form' onSubmit={handleSubmit}>
                <div className='inputGroup'>
                  <label>Nombre</label>
                  <input 
                  className="console"
                  onChange={handleChange} 
                  value={userData.name} 
                  required
                  name="name" 
                  type='text' 
                  placeholder='Ingrese su nombre'
                  />
                </div>
                <div className='inputGroup'>
                  <label>Número</label>
                  <input 
                  onChange={handleChange} 
                  value={userData.phone} 
                  required
                  name="phone" 
                  type='number' 
                  placeholder='Ingrese su número'
                  />
                </div>
                <div className='inputGroup'>
                  <label className='emailLabel'>Email</label>
                  <input 
                  onChange={handleChange} 
                  value={userData.email}
                  required
                  name="email" 
                  type='email' 
                  placeholder='Ingrese su correo electronico'
                  />
                </div>
                <div className='inputGroup'>
                  <label className='emailLabel'>Email</label>
                  <input 
                  onChange={handleChange} 
                  value={userData.email2}
                  required
                  name="email2" 
                  type='email' 
                  placeholder='Ingrese su correo electronico'
                  onKeyUp={validationInputs}
                  valido={Input.valido}
                  />
                  <p className={Input.valido === 'true' ? 'valido' : 'noValido'}>{Input.valido === 'true' ? '' : 'Recuerda: Ambos correos deben ser iguales para enviar el formulario'}</p>
                </div>
                <div className="buttonContainer">
                  <button className='deleteCart' onClick={() => setModal(false)}>Volver</button>
                  <button className="deleteCart2" disabled={Input.valido === "false"}>Enviar</button>
                </div>
              </form>
            </div>
         	</div>
        }
      </div>
)}

export default CheckOut
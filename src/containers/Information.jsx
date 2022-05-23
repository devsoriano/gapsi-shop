import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { currency } from './../utils/functions'
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  const { cart } = state;

  const handleSubmit = () => {
    const formDate = new FormData(form.current);
    const buyer = {
      name: formDate.get('name'),
      email: formDate.get('email'),
      address: formDate.get('address'),
      apto: formDate.get('apto'),
      city: formDate.get('city'),
      country: formDate.get('country'),
      state: formDate.get('state'),
      cp: formDate.get('cp'),
      phone: formDate.get('phone'),
    };

    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.attributes.iud}>
            <div className="Information-element">
              <h4>{item.attributes.title.substr(0, 20)}</h4>
              <span>{currency(item.attributes.price)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;

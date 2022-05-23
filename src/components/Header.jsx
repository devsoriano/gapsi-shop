import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <header className="Header">
      <section className='Header__logo'>
        <Link to="/"><img src="http://grupoasesores.com.mx/img/logo.png" alt="" /></Link>
      </section>
      <section className="Header__cart">
        <Link to="/checkout">
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </section>
    </header>
  );
};

export default Header;

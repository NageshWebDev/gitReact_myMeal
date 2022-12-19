import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './stores/CartProvider';
import Footer from './components/Layout/Footer';
import CopyRight from './components/Layout/CopyRight';
import ConfirmCustomerFormProvider from './stores/CustomerFormContext';
import { CustomerDetailsProvider } from './stores/CustomerFormContext';

function App() {

  const [showCart, setShowCart] = useState(false)

  function showCartHandler() {
    setShowCart(true)
  }

  function hideCartHandler() {
    setShowCart(false)
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <ConfirmCustomerFormProvider>
        <CustomerDetailsProvider>
          {showCart && <Cart onHideCart={hideCartHandler} />}
        </CustomerDetailsProvider>
      </ConfirmCustomerFormProvider>
      <main>
        <Meals />
      </main>
      <Footer />
      <CopyRight />
    </CartProvider>
  );
}

export default App;

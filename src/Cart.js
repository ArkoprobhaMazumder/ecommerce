import React from 'react'
import { useCartContext } from './context/Cart_Context'
import CartItem from './components/CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from './helper/FormatPrice';

const Cart = () => {

  const { cart, clearCart, total_price,shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return <div className='cart-section-no-item'>
      <h1>NO ITEM IN CART</h1>
    </div>
  }

  return (
    <div className='cart-section-main-container'>
      <div className="cart-section-item-lists">
        <div className="cart-section-item-lists-title">
          <p>ITEM</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>SUBTOTAL</p>
          <p>REMOVE</p>
        </div>
        <div className="cart-section-products-list">
          {
            cart.map((curEle) => {
              return (
                <CartItem key={curEle.id} {...curEle} />
              )
            })
          }
        </div>
      </div>
      <hr />
      <div className="cart-section-buttons">
        <NavLink to="/products">
          <button className='cart-section-buttons-continue-btn'>Continue Shopping</button>
        </NavLink>
        <button className='cart-section-buttons-clear-button' onClick={clearCart}>Clear Cart</button>
      </div>
      <div className="cart-section-total-bill">
        <div className="cart-section-total-details">
          <p>Sub-Total: <span><FormatPrice price={total_price}/></span></p>
          <p>Shipping-Fee: <span><FormatPrice price={shipping_fee}/></span></p>
          <hr />
          <p>Order-Total: <span><FormatPrice price={total_price+shipping_fee}/></span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart

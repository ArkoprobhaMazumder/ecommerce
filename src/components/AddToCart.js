import { FaCheck } from "react-icons/fa"
import { useState } from "react";
import "./addtocart.css";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/Cart_Context";




const AddToCart = ({ product }) => {

  const {addToCart}=useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);


  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  
  return (
    <>
      <div className='color-box'>
        Colors: {
          colors.map((ele, index) => {
            return (

              <button
                key={index}
                className={color === ele ? 'color-button-singleProduct active' : 'color-button-singleProduct'}
                style={{ backgroundColor: ele }}
                onClick={() => { setColor(ele) }}>
                {color === ele ? <FaCheck className="color-change-icon" /> : null}
              </button>
            )
          })
        }
      </div>
      {/* Amount section for the quantity of the product */}
      <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
      <NavLink to="/cart"
        onClick={()=> addToCart(id,color,amount,product)}
      >
        <button className='cart-amount-button'>Add to cart</button>
      </NavLink>
    </>
  )
}

export default AddToCart

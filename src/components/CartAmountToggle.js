
import "./cartamountbutton.css";

const CartAmountToggle = ({amount,setIncrease,setDecrease}) => {
  return (
    <div className='cart-amount-section'>
        <div className="amount-toggle">
            <button onClick={()=>{setDecrease()}}>-</button>
            <p className='cart-amount'>{amount}</p>
            <button onClick={()=>{setIncrease()}}>+</button>
        </div>
        
    </div>
  )
}

export default CartAmountToggle

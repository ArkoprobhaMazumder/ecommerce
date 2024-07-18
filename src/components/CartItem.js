
import { FaTrash } from "react-icons/fa";
import "./cartitem.css";
import FormatPrice from "../helper/FormatPrice";
import CartAmountToggle from './CartAmountToggle';
import { useCartContext } from '../context/Cart_Context'




const CartItem = ({ id, name, image, color, price, amount }) => {

    const { removeItem, setDecrease, setIncrease } = useCartContext();


    // const setIncrease = () => {
    //     amount < stock ? setAmount(amount + 1) : setAmount(stock);
    // }

    // const setDecrease = () => {
    //      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    // }

    let indPrice = <FormatPrice price={price} />;

    return (
        <div className='cart-item-product-box' key={id}>
            <div className="cart-item-product-box-heading">
                <img src={image} alt={id} />
                <div>
                    <h4>{name}</h4>
                    <p>color: <span style={{ backgroundColor: color, color: color }}></span></p>
                </div>
            </div>
            <p> {indPrice}</p>
            <p><CartAmountToggle amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />  </p>
            <p>{amount} * {indPrice} = <FormatPrice price={amount * price} /></p>
            <div className="cart-item-product-box-trash-icon">
                <FaTrash onClick={() => removeItem(id)} />
            </div>
        </div>
    )
}

export default CartItem

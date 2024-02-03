import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Cart_Reducer";




const CartContext = createContext();

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("myCart");
//     if (newCartData == []) {
//         return [];
//     }
//     else {
//         return JSON.parse(newCartData);
//     }

        const parsedData=JSON.parse(newCartData);
        if(!Array.isArray(parsedData)) return [];
        return parsedData;
 }



    const initialState = {
        cart: getLocalCartData(),
        total_item: "",
        total_price: "",
        shipping_fee: 5000,
    }

    const CartProvider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState)

        const addToCart = (id, color, amount, product) => {

            dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
        }

        const removeItem = (id) => {
            dispatch({ type: "REMOVE_ITEM", payload: id });
        }

        const clearCart=()=>{
            dispatch({type:"CLEAR_CART"})
        }


        //Incrementing and decrementing cart page funtionality

        const setIncrease = (id) => {
            dispatch({type:"SET_INCREMENT",payload:id})
        }
        const setDecrease = (id) =>{
            dispatch({type:"SET_DECREMENT",payload:id})
        }

        // to add data in our local Storage
        useEffect(() => {
            // dispatch({type:"CART_TOTAL_ITEM"})
            // dispatch({type:"CART_TOTAL_PRICE"})
            dispatch({type:"CART_ITEM_PRICE_TOTAL"})
            localStorage.setItem("myCart", JSON.stringify(state.cart))
        }, [state.cart])



        return <CartContext.Provider value={{ ...state, addToCart,removeItem,clearCart,setDecrease,setIncrease}}>
            {children}
        </CartContext.Provider>
    }
    const useCartContext = () => {
        return useContext(CartContext);
    }
    export { CartProvider, useCartContext };
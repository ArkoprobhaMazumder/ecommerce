

const Cart_Reducer = (state, action) => {


    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        //tackle the existing user
        let existingProduct = state.cart.find((curEle) => curEle.id === id + color)

        if (existingProduct) {
            let updatedProduct = state.cart.map((curItem) => {
                if (curItem.id === id + color) {
                    let newAmount = curItem.amount + amount;
                    if (newAmount >= curItem.max) {
                        newAmount = curItem.max;
                    }
                    return {
                        ...curItem,
                        amount: newAmount
                    }
                }
                else {
                    return curItem
                }
            })
            return {
                ...state,
                cart: updatedProduct,
            }
        }
        else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }

    //set the increment and decrement 

    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curEle) => {
            if (curEle.id === action.payload) {
                let decrementAmount = curEle.amount + 1;

                if (decrementAmount >= curEle.stock) {
                    decrementAmount = curEle.stock;
                }
                return { ...curEle, amount: decrementAmount }
            }
            else {
                return curEle;
            }
        })
        return {
            ...state,
            cart: updatedProduct,
        }
    }

    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curEle) => {
            if (curEle.id === action.payload) {
                let decrementAmount = curEle.amount - 1;

                if (decrementAmount <= 1) {
                    decrementAmount = 1;
                }

                return { ...curEle, amount: decrementAmount }
            }
            else {
                return curEle;
            }
        })
        return {
            ...state,
            cart: updatedProduct,
        }
    }
    

    //Removing the existing item
    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curEle) => curEle.id !== action.payload
        )
        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

     //Showing cart total item
    // if(action.payload === "CART_TOTAL_ITEM"){
    //     let total_item=state.cart.reduce((initialValue,curEle)=>{
    //         let {amount}=curEle; 
    //         initialValue = initialValue + amount;
    //         return initialValue
    //     },0)
    //     return {
    //         ...state,
    //         total_item
    //     }
    // }

    // if(action.type==="CART_TOTAL_PRICE"){
    //     let total_price=state.cart.reduce((initialValue,curEle)=>{
    //         let {price,amount}=curEle

    //         initialValue=initialValue+(price*amount)
    //         return initialValue
    //     },0)
    //     return{
    //         ...state,
    //         total_price
    //     }
    // }


    
    if(action.type==="CART_ITEM_PRICE_TOTAL"){
        let {total_item,total_price}=state.cart.reduce(
            (accum,curEle)=>{
                let {price,amount}=curEle;

                accum.total_item += amount;
                accum.total_price += (price*amount)

                return accum
            },{
            total_item:0,
            total_price:0,
        })
        return{
            ...state,
            total_item,
            total_price
        }
    }



    return state;
}

export default Cart_Reducer

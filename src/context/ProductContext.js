//create a context api (like globel store)
// set a Provider(for delivaring the data)
//consumer as useContext hook(use to have a simple functionality)

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";


// creating the context api
const AppContext=createContext();


//Api integration
const API="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},
}

//creating a provider and send it to its customer/child componets
const AppProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,initialState);
    

    const getProducts=async (url)=>{
        dispatch({type:"API_LOADING"})
        try {
            const res=await axios.get(url);
            const products=res.data;
            dispatch({type:"SET_API_DATA",payload:products})
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    }

    const getSingleProduct=async (url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res=await axios.get(url);
            const singleProduct=res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct})
        } catch (error) {
            dispatch({type:"SINGLE_ERROR"});
        }
    }


    useEffect(()=>{
        getProducts(API);
    },[]);

    return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>
}


//creating a custom hook
const useProductContext=()=>{
    return useContext(AppContext);
}



export {AppProvider,AppContext,useProductContext};

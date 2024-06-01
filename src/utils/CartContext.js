import { createContext } from "react";

const CartContext=createContext({
    cart:[],
    cartItems:()=>{},
    addCartItems:(item)=>{},
    show:true,
    toggleShow:()=>{},
    total:0,
    totalItems:0
})

export default CartContext;
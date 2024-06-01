import React, { useState } from "react";
import CartContext from "./CartContext";
import { crudcrudapi } from "./constants";

const CartContextStore = (props) => {
  
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotal] = useState(0);
  const [totalPurchase, setTotalPurchase] = useState(0);
  const [allItems,setallItems]=useState([])

  const toggleDisplay = () => {
    setShowCart(!showCart);
  };

  const addItemsToCart = async (newItem) => {
    setTotalPurchase(totalPurchase+1)
    setTotal(totalPrice+parseInt(newItem.price))
    // let flag=0;
    // const newArray=cartItems.map((item)=>{
    //   if(item.title===newItem.title){
    //     flag=1;
    //     item.count+=1;
    //   }
    //   return item
    // })

    // if(flag===0){
    //   setcartItems([...cartItems,newItem])
    // }
    // else{
    //   setShowCart([...newArray])
    // }
    const email = localStorage.getItem("email").replace(/[@.]/g, "");
    const postElem = await fetch(crudcrudapi + "/cart" + email, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });


    const data=await getItems();
    setallItems(data)
  };


  const getItems=async ()=>{
    const email = localStorage.getItem("email").replace(/[@.]/g, "");
    const getElem = await fetch(crudcrudapi + "/cart" + email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data= await getElem.json();
    return data;
  
  }

  const Cartstore = {
    cart:allItems,
    cartItems: getItems,
    show: showCart,
    toggleShow: toggleDisplay,
    addCartItems: addItemsToCart,
    total: totalPrice,
    totalItems: totalPurchase,
  };
  return (
    <CartContext.Provider value={Cartstore}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextStore;

import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartc,setcartc] = useState()


const incrcartc=(val)=>{
  setcartc(cartc+val)
}

  
  return <CartContext.Provider value={{cartc,incrcartc}}>{children}
  
  
  </CartContext.Provider>;
};

import React from "react";
import { CartProvider } from "react-use-cart";
import Home from "./home";

function Main() {
    return(
        
        <>
        <CartProvider>
            <Home />
            
        </CartProvider>
      </>
        
    )
}

export default Main
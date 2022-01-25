import React from "react";
import { createContext } from "react";
import ContextCart from "./ContextCart";
import DATA from "../Data";
import { useDispatch } from "react-redux";

export const CartContext = createContext();

const Cart = () => {
  return (
    <>
      <CartContext.Provider value={DATA}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;

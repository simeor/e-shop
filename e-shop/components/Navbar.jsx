import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../stateContext/StateContext";
import { Cart } from ".";
const Navbar = () => {
  const { setShowCart, totalQuantities, showCart } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Shop</Link>
      </p>
      <button
        className="cart-icon"
        type="icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        {!!totalQuantities && (
          <span className="cart-item-qty">{totalQuantities}</span>
        )}
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;

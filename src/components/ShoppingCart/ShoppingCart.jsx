import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  CartItemContainer,
  DecrementButton,
  IncrementButton,
  ItemQuantity,
  ItemTitle,
  RemoveButton
} from "./ShoppingCart.style";

const ShoppingCart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 && <p>No Items</p>}
      {cart.map((item) => (
        <CartItemContainer key={item.id}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
          <IncrementButton
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            Increment
          </IncrementButton>
          <DecrementButton
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            Decrement
          </DecrementButton>
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            Remove
          </RemoveButton>
        </CartItemContainer>
      ))}
    </div>
  );
};

export default ShoppingCart;

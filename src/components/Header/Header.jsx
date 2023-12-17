import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { HeaderContainer, Navigation } from "./Header.style";

const Header = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HeaderContainer>
      <h1>My Online Store</h1>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({totalItems})</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;

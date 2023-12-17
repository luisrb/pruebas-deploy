import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  AddToCartButton,
  ProductContainer,
  ProductPrice,
  ProductTitle
} from "./ProductList.style";

const ProductList = () => {
  const { addToCart, products } = useContext(CartContext);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>Price: ${product.price}</ProductPrice>
          <AddToCartButton onClick={() => addToCart(product)}>
            Add to Cart
          </AddToCartButton>
        </ProductContainer>
      ))}
    </div>
  );
};

export default ProductList;

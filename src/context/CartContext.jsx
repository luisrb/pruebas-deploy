import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, title: "Zapatillas", price: 10.99 },
    { id: 2, title: "Gorro", price: 19.99 },
    { id: 3, title: "Camiseta", price: 14.99 }
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        })
      );
      return;
    }
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity };
        }

        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, products }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

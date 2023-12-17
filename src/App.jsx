import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;

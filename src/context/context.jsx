
import React from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const data = [
    { id: 1, title: "Men's T-Shirt", category: "men's clothing", price: 29.99, image: "" },
    { id: 2, title: "Women's Dress", category: "women's clothing", price: 59.99, image: "" },
    { id: 3, title: "Smartphone", category: "electronics", price: 699.99, image: "" },
    { id: 4, title: "Gold Necklace", category: "jewelery", price: 149.99, image: "" },
  ];
  const loading = false;
  const error = null;
  const isLogin = false;
  const cartproducts = [];

  const addToCart = () => {};

  const contextValue = {
    data,
    loading,
    error,
    isLogin,
    setIslogin: () => {},
    addToCart,
    cart: cartproducts,
    cartproducts,
    setCartproducts: () => {}
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

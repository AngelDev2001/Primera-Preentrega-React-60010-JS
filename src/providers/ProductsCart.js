import { createContext, useContext } from "react";
import { products } from "../data-list";

const ProductsContext = createContext({
  cart: [],
  onAddProductCart: (_onAddProductCart) => console.info(_onAddProductCart),
});

export const ProductsCart = ({ children }) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const onAddProductCart = (productId) => {
    const product = products.find((_product) => _product.id === productId);
    localStorage.setItem("cart", JSON.stringify([product, ...cart]));
  };

  return (
    <ProductsContext.Provider value={{ cart, onAddProductCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsCart = () => useContext(ProductsContext);

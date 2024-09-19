import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext({
  cart: [],
  cartLength: null,
  totalPrice: null,
  onIncreaseQuantity: (product) => console.info(product),
  onDecreaseQuantity: (product) => console.info(product),
  onAddProductCart: (product) => console.info(product),
  onDeleteProduct: (product) => console.info(product),
});

export const ProductsCartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const onAddProductCart = (product) => {
    const isExistsProduct = cart.some((_product) => _product.id === product.id);

    if (isExistsProduct) {
      const updateCartProduct = cart.map((_product) => {
        if (_product.id === product.id) {
          return { ..._product, quantity: _product.quantity + 1 };
        } else {
          return _product;
        }
      });
      setCart(updateCartProduct);
    } else {
      setCart((_product) => [..._product, { ...product, quantity: 1 }]);
    }
  };

  const onIncreaseQuantity = (productId = null) => {
    const product = cart.map((_product) => {
      if (_product.id === productId) {
        return { ..._product, quantity: _product.quantity + 1 };
      } else {
        return _product;
      }
    });
    setCart(product);
  };

  const onDecreaseQuantity = (productId = null) => {
    const product = cart.map((_product) => {
      if (_product.id === productId) {
        if (_product.quantity === 0) {
          return onDeleteProduct(_product.id);
        }

        if (_product.quantity > 1) {
          return { ..._product, quantity: _product.quantity - 1 };
        }
      } else {
        return _product;
      }
    });
    setCart(product);
  };

  const onDeleteProduct = (productId = null) => {
    const product = cart.filter((_product) => _product?.id !== productId);
    setCart(product);
  };

  const cartLength = cart.length;

  const totalPrice = cart.reduce(
    (acc, product) => acc + product?.price * product?.quantity,
    0
  );

  return (
    <ProductsContext.Provider
      value={{
        cart,
        cartLength,
        totalPrice,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onAddProductCart,
        onDeleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsCart = () => useContext(ProductsContext);

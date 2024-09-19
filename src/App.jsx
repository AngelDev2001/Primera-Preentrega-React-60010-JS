import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./router";
import { ProductsCartProvider } from "./providers/ProductsCartProvider";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ProductsCartProvider>
          <Router />
        </ProductsCartProvider>
      </BrowserRouter>
    </>
  );
};

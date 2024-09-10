import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/layout/BaseLayout";
import { About, Contact, Home } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
      <Route
        path="/about"
        element={
          <BaseLayout>
            <About />
          </BaseLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <BaseLayout>
            <Contact />
          </BaseLayout>
        }
      />
    </Routes>
  );
};

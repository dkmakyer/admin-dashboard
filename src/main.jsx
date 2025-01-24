import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./contexts/ProductsContext.jsx";
import { FormProvider } from "./contexts/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <FormProvider>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </FormProvider>
);

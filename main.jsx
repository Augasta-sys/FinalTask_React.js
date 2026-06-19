import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ThemeProvider from "./Context/ThemeContext";
import CartProvider from "./Context/CartContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
    <ThemeProvider> 
        <CartProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
    </ThemeProvider>
    </StrictMode>
);

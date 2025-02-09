import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/auth/signup";
import Home from "../pages/home/home";
import Products from "../pages/products/products";
import ProductDetails from "../pages/product-details/productDetails";

export const publicRoute = createBrowserRouter([
    {
        path: "/",
        element: <Signup />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/product-details/:id",
        element: <ProductDetails />
    },
    {
        path: "*",
        element: <h1>Page not found</h1>
    }
])
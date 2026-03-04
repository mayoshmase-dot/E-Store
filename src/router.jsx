import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import Cart from "./pages/cart/Cart";
import ProductsDetails from "./pages/products/ProductsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: '/product/:id',
                element: <ProductsDetails />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            }

        ]
    }
]);
export default router;
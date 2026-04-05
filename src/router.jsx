import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import Cart from "./pages/cart/Cart";
import ProductsDetails from "./pages/products/ProductsDetails";
import ProductPage from "./pages/products/ProductPage";
import ProtectedRouter from "./ProtectedRouter";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileOrders from "./pages/profile/ProfileOrders";
import ProfileMode from "./pages/profile/ProfileMode";
import ProfileLanguage from "./pages/profile/ProfileLanguage";
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPassword";
import VerifyCode from "./pages/auth/code/VerifyCode";

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
                element:
                    <ProtectedRouter>
                        <Cart />
                    </ProtectedRouter>
            },
            {
                path: 'checkout',
                element:
                    <ProtectedRouter>
                        <Checkout />
                    </ProtectedRouter>
            },
            {
                path: 'profile',
                element:
                    <ProtectedRouter>
                        <Profile />
                    </ProtectedRouter>,
                children: [
                    {
                        path: 'profileInfo',
                        element: <ProfileInfo />
                    },
                    {
                        path: 'orders',
                        element: <ProfileOrders />
                    },
                    {
                        path:'mode',
                        element:<ProfileMode />
                    },
                    {
                        path:'language',
                        element:<ProfileLanguage />
                    }
                ]
            },
            {
                path: 'product/:id',
                element: <ProductsDetails />
            },
            {
                path: 'products',
                element: <ProductPage />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'forgotPassword',
                element: <ForgotPassword />
            },
            {
                path: 'verifyCode',
                element: <VerifyCode />
            },

        ]
    }
]);
export default router;
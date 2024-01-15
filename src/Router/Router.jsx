import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import Polo from "../Pages/Polo/Polo";
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import SweatShirt from "../Pages/SweatShirt/SweatShirt";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category',
                element: <Category />
            },
            {
                path: '/polo',
                element: <Polo />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/Register',
                element: <Register />
            },
            {
                path: '/sweatShirt',
                element: <SweatShirt />
            },
        ]
    },
]);
export default router;
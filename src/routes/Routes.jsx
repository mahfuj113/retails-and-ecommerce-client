import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ProductDetail from "../details/ProductDetail";
import MyCart from "../pages/Mycart/MyCart";
import Update from "../Update/Update";
import Apple from "../details/Amozon/Apple";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("https://retail-and-e-commerce-server-5vu7yn91a-mahfuj113.vercel.app/create-category")
        },
        {
          path: '/addProduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: '/brand/:name',
          element: <Apple></Apple>,
          loader: ({params}) => fetch(`https://retail-and-e-commerce-server-5vu7yn91a-mahfuj113.vercel.app/products/${params.name}`)
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
          loader: ({params}) => fetch(`https://retail-and-e-commerce-server-5vu7yn91a-mahfuj113.vercel.app/product/${params.id}`)
        },
        {
          path: "/update/:id",
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params}) => fetch(`https://retail-and-e-commerce-server-5vu7yn91a-mahfuj113.vercel.app/product/${params.id}`)
        },
        {
          path: '/myCart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: () => fetch('https://retail-and-e-commerce-server-5vu7yn91a-mahfuj113.vercel.app/myCart')
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);
  export default router;
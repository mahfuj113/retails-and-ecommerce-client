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
            loader: () => fetch("http://localhost:5000/create-category")
        },
        {
          path: '/addProduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: '/brand/:name',
          element: <Apple></Apple>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
        },
        {
          path: '/details/:id',
          element: <ProductDetail></ProductDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: "/update/:id",
          element: <Update></Update>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: '/myCart',
          element: <MyCart></MyCart>,
          loader: () => fetch('http://localhost:5000/myCart')
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
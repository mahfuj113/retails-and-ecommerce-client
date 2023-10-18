import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Amazon from "../details/Amozon/Amazon";
import ProductDetail from "../details/ProductDetail";
import MyCart from "../pages/Mycart/MyCart";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          path: '/amazon',
          element: <Amazon></Amazon>,
          loader: () => fetch('http://localhost:5000/products')
        },
        {
          path: '/details/:id',
          element: <ProductDetail></ProductDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
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
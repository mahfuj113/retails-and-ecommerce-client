import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Home/Login/Login";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
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
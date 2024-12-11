
import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Layout/Components/Home/Home";
import Login from "../Layout/Components/Login";
import Register from "../Layout/Components/Register";
import CheckOut from "../Layout/Components/CheckOut";
import YourOrders from "../Layout/Components/YourOrders";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/login",
                element:<Login />
            },
            {
                path: "/register",
                element: <Register /> 
            },
            {
                path:'/check/:id',
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/yourOrders',
                element: <PrivateRoute> <YourOrders /> </PrivateRoute>
            }
        ]
    },
]);
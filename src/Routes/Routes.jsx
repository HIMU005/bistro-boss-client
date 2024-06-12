import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashBoard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/Payment/PaymentHistory";
import AdminHome from "../Pages/DashBoard/AdminHome";
import UserHome from "../Pages/DashBoard/UserHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
            },
            {
                path: '/order/:category',
                element: <Order />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,
        children: [
            // normal routes 
            {
                path: 'userHome',
                element: <UserHome />
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />,
            },
            // admin routes 
            {
                path: 'adminHome',
                element: <AdminRoute>
                    <AdminHome />
                </AdminRoute>
            },
            {
                path: "users",
                element: <AdminRoute>
                    <AllUsers />
                </AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute>
                    <AddItems />
                </AdminRoute>,
            },
            {
                path: 'manageItems',
                element: <AdminRoute>
                    <ManageItems />
                </AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute>
                    <UpdateItem />
                </AdminRoute>,
                loader: ({ params }) => fetch(`https://bistroboss-server-one.vercel.app/menu/${params.id}`)
            }
        ]
    },
]);
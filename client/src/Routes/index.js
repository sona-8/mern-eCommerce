import { lazy } from "react";
import ForgetPassword from "../Pages/auth/ForgetPassword";
import SendCode from "../Pages/auth/SendCode";
import Categories from "../Pages/Category";
import Invoice from "../Pages/Checkout/Invoice";
import Search from "../Pages/SearchUi";

import { Private, Public } from "./protectRouter";

const Wishlist = lazy(() => import("../Pages/Wishlist"));

const Details = lazy(() => import("../Pages/ProductDetails"));

const Cart = lazy(() => import("../Pages/Shopping/"));

const Login = lazy(() => import("../Pages/auth/Login"));

const Auth = lazy(() => import("../Pages/auth"));

const Register = lazy(() => import("../Pages/auth/Register"));

const Billing = lazy(() => import("../Pages/Checkout/Billing"));

const Checkout = lazy(() => import("../Pages/Checkout"));

const Order = lazy(() => import("../Pages/Checkout/Order"));

// import Layout from "../Pages/Layout";

const OrderSuccess = lazy(() => import("../Pages/OrderSuccess"));

const Profile = lazy(() => import("../Pages/Profile"));

const ManageAccount = lazy(() => import("../Components/Profile/ManageAccount"));

const MyOrders = lazy(() => import("../Components/Profile/MyOrder"));

const Home = lazy(() => import("../Pages/Home"));

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "invoice",
    element: (
      <Private>
        <Invoice />
      </Private>
    ),
  },
  //   const [searchParams] = useSearchParams();
  // const code = searchParams.get('code'); // "testCode"
  {
    path: "query/",
    element: <Search />,
  },
  {
    path: "order_success/:order_id",
    element: (
      <Private>
        <OrderSuccess />
      </Private>
    ),
  },
  {
    path: "wishlist",
    element: (
      <Private>
        <Wishlist />
      </Private>
    ),
  },
  {
    path: "product/:id",
    element: <Details />,
  },
  {
    path: "categories",
    element: <Categories />,
  },
  {
    path: "cartitems",
    element: <Cart />,
  },
  {
    path: "identify/forget_password",
    element: <ForgetPassword />,
  },
  {
    path: "indentify/recovery_account/:email",
    element: <SendCode />,
  },
  {
    path: "",
    element: (
      <Private>
        <Checkout />
      </Private>
    ),
    children: [
      {
        path: "billing",
        element: (
          <Private>
            <Billing />
          </Private>
        ),
      },
      {
        path: "order",
        element: (
          <Private>
            <Order />
          </Private>
        ),
      },
    ],
  },
  {
    path: "",
    element: <Auth />,
    children: [
      {
        path: "register",
        element: (
          <Public>
            <Register />
          </Public>
        ),
      },
      {
        path: "login",
        element: (
          <Public>
            <Login />
          </Public>
        ),
      },
    ],
  },
  {
    path: "profile/:username",
    element: (
      <Private>
        <Profile />
      </Private>
    ),
    children: [
      {
        path: "manageaccount",
        element: (
          <Private>
            <ManageAccount />
          </Private>
        ),
      },
      {
        path: "myorders",
        element: (
          <Private>
            <MyOrders />
          </Private>
        ),
      },
    ],
  },
];

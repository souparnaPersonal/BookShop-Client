import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Products } from "../pages/Products";
import { Orders } from "../pages/Orders";
import SignInOrSignup from "../pages/SignInOrSignup";
import { ProductDetails } from "../pages/ProductDetails";
import ProtectedRoute from "../layout/ProtectedRoute";
import { DashBoard } from "../pages/DashBoard";
import { MainLayout } from "../layout/MainLayout";
import Home from "../components/Home";
import Success from "../pages/Success";
import Failure from "../pages/Failure";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute role="user">
            <Orders />
          </ProtectedRoute>
        ),
      },

      {
        path: "dashboard",
        element: (
          <ProtectedRoute role="admin">
            <DashBoard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/sucess",
        element: <Success />,
      },
      {
        path: "/failed",
        element: <Failure />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignInOrSignup />,
  },
]);

export default router;

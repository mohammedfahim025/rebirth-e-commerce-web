import { createBrowserRouter } from "react-router";
import RootLayouts from "./RootLayouts";
import Home from "./Home";
import OrderNow from "../pages/ordernow/OrderNow";
import Checkout from "../pages/checkout/Checkout";
import AllProducts from "../allproducts/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "product-details/:id", element: <OrderNow /> },
            { path: "checkout", element: <Checkout /> },
                  { path: "all-products", element: <AllProducts /> },


    ],
  },
]);

export default router;

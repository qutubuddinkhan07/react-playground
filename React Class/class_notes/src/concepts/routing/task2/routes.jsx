import { createBrowserRouter } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Beauty from "./pages/Beauty";
import Groceries from "./pages/Groceries";
import Layout from "./components/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AllProducts />,
      },
      {
        path: "/beauty",
        element: <Beauty />,
      },
      {
        path: "/groceries",
        element: <Groceries />,
      },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import ViewAll from "../pages/ViewAll";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/authenticated",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "view-all",
        element: <ViewAll />,
      },
    ],
  },
]);

export default routes;

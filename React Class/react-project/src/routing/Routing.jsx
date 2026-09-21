import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../pages/Home";
import ViewAll from "../pages/ViewAll";
import CreateStudent from "../pages/CreateStudent";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/view-all",
        element: <ViewAll />,
      },
    ],
  },
  {
    path: "/create-student",
    element: <CreateStudent />,
  },
]);

export default routes;

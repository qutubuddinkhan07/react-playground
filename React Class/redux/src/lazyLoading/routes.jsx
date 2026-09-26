import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouting from "./PrivateRouting";
// import Home from "./Home";
// import About from "./About";

//! Lazy importing - declaring here only
// const Home = lazy(() => import("./Home"));
// const About = lazy(() => import("./About"));

// export const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: (
//       <Suspense fallback={<h1>Loading....</h1>}>
//         <About />
//       </Suspense>
//     ),
//   },
// ]);

//! Lazy importing - declaring globally in the common parent component
// import Dashboard from "./Dashboard";
// import Login from "./Login";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Dashboard = lazy(() => import("./Dashboard"));
const Login = lazy(() => import("./Login"));

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouting>
        <Dashboard />
      </PrivateRouting>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

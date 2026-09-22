import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Product from "./Product";
import Order from "./Order";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import PageNotFound from "./PageNotFound";
import Layout from "./Layout";

// const Routing = () => {
//   return (
//     // ! Before using Layout
// <div>
//   <BrowserRouter>
//     <Nav />
//     {/* Removing this from here and using it in <Layout/> component /> */}
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product" element={<Product />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/order-summary" element={<Order />} />

//       {/* //! Nested Routing Concept */}
//       <Route path="/product" element={<Product />}>
//         <Route index element={<Cart />} />
//         <Route path="cart" element={<Cart />} />
//         <Route path="wishlist" element={<Wishlist />} />
//       </Route>

//       {/* //! Universal route to handle the not showing anything on the page */}
//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   </BrowserRouter>
// </div>

// // ! after using Layout
// <div>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/order-summary" element={<Order />} />

//         {/* //! Nested Routing Concept */}
//         <Route path="/product" element={<Product />}>
//           <Route index element={<Cart />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="wishlist" element={<Wishlist />} />
//         </Route>
//       </Route>
//       {/* //! Universal route to handle the not showing anything on the page */}
//       <Route path="*" element={<PageNotFound />} />/
//     </Routes>
//   </BrowserRouter>
// </div>
//   );
// };

// export default Routing;

//! Modern way of routing
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          //! Uncaught Error: Absolute route path "/cart" nested under path "/product" is not valid. An absolute child route path must start with the combined path of all its parent routes
          //! **WE CAN DIRECT USE NAME IN NESTED PATH WITHOUT '/'
          { index: true, element: <Cart /> },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/order-summary",
        element: <Order />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default Routing;

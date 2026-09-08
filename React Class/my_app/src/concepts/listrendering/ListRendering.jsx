import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";

// const ListRendering = () => {
//   let cars = [
//     "Maruti Suzuki Dzire",
//     "Tata Nexon",
//     "Hyundai Creta",
//     "Mahindra Thar",
//     "Toyota Innova Hycross",
//     "Kia Sonet",
//     "Supra",
//     "Hell Cat",
//   ];

//   return (
//     <div>
//       <ul type="square">
//         {cars.map((car, index) => {
//           return <li key={index}>{car}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default ListRendering;

//! =============================
//! Demonstration of performing iteration on array of objects
// const ListRendering = () => {
//     const products = [
//         {
//             id: 1,
//             name: "Wireless Ergonomic Mouse",
//             price: 29.99,
//             category: "Electronics",
//       inStock: true,
//       rating: 4.5,
//       tags: ["accessory", "wireless", "office"],
//     },
//     {
//         id: 2,
//         name: "Waterproof Bluetooth Speaker",
//         price: 45.5,
//         category: "Audio",
//         inStock: false,
//         rating: 4.2,
//         tags: ["portable", "bluetooth", "outdoor"],
//     },
//     {
//         id: 3,
//         name: "Running Shoes",
//         price: 79.99,
//         category: "Footwear",
//         inStock: true,
//         rating: 4.8,
//         tags: ["sports", "apparel", "fitness"],
//     },
// ];

// return (
//     <div>
//       <>
//         {products.map((product, index) => {
//             return (
//                 <ul key={index}>
//               <li>{product.id}</li>
//               <li>{product.name}</li>
//               <li>{product.price}</li>
//             </ul>
//           );
//         })}
//       </>
//     </div>
//   );
// };

// export default ListRendering;

//! ============= Fetching users from API ================
//! Demonstration of performing iteration on array of objects
// const ListRendering = () => {
//   const [data, setData] = useState([]);
//   console.log(data);

//   //! By using then catch
//   function fetchData() {
//     fetch("https://api.github.com/users")
//       .then((val) => val.json())
//       .then((res) => setData(res))
//       .catch((e) => {
//         console.log(e);
//         return null;
//       });
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((val, index) => {
//         return (
//           <Fragment key={index}>
//             <img src={val.avatar_url} alt="" height={100} />
//             <h1>{val.login}</h1>
//           </Fragment>
//         );
//       })}
//     </div>
//   );
// };

// export default ListRendering;

//! ============= Fetching users from API ================
//! Card
const ListRendering = ({searchInp}) => {
  const [data, setData] = useState(null);

  function fetchData() {
    fetch("https://api.github.com/users")
      .then((val) => val.json())
      .then((res) => setData(res))
      .catch((err) => console.log("Error fetching users: " + err));
  }

  // Filter runs automatically whenever data or searchInp changes
  const filteredData = data
    ? data.filter((user) =>
        user.login.toLowerCase().includes((searchInp || "").toLowerCase()),
      )
    : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  return (
    <div className="min-h-screen w-full p-9 flex gap-2 flex-wrap items-center justify-center">
      {!data ? (
        <h1>Wait, data is being fetched...</h1>
      ) : filteredData.length > 0 ? (
        filteredData.map((user) => {
          return <Card details={user} key={user.id} />; // ✅ Using user.id instead of index
        })
      ) : (
        <h1>No users found matching "{searchInp}"</h1>
      )}
    </div>
  );
};

export default ListRendering;

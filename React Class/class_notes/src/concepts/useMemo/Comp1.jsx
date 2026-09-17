import React, { useMemo, useState } from "react";

// const Comp1 = () => {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const isEven = () => {
//     //! if we are using like this then even if any other state changes other than count1 then also all these after this calculation only will rendered -- that will create a lag [to avoid this use 'useMemo()']
//     let i = 0;
//     while (i < 1000000000) i++;
//     return count1 % 2 == 0 ? "Even Number" : "Odd Number";
//   };
//   return (
//     <div>
//       <button onClick={() => setCount1((prev) => prev + 1)}>
//         CountOne -- {count1}
//       </button>
//       <span>&nbsp;{isEven()}</span>

//       <br />
//       <button onClick={() => setCount2((prev) => prev + 2)}>
//         CountTwo -- {count2}
//       </button>
//     </div>
//   );
// };

// export default Comp1;

//! USING useMemo() hook
const Comp1 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //! Here this will only be executed when 'count1' state is changed
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 == 0 ? "Even Number" : "Odd Number";
  }, []);

  return (
    <div>
      <button
        className="bg-blue-700 px-2 py-1 text-white cursor-pointer rounded-xl"
        onClick={() => setCount1((prev) => prev + 1)}
      >
        CountOne -- {count1}
      </button>
      <span>&nbsp;{isEven}</span>

      <br />
      <button
        className="bg-blue-700 px-2 py-1 text-white cursor-pointer rounded-xl"
        onClick={() => setCount2((prev) => prev + 2)}
      >
        CountTwo -- {count2}
      </button>
    </div>
  );
};

export default Comp1;

import React, { memo } from "react";

const Button = (props) => {
  //   console.log(props);
  /*
  {children: 'Increment Age', fun: ƒ}
  {children: 'Increment Salary', fun: ƒ}
  */

  let { children, fun } = props;
  console.log(`${children} is rendering`);
  return (
    <div>
      <button
        className="bg-pink-800 text-white px-2 rounded-xl mb-1"
        onClick={fun}
      >
        {children}
      </button>
    </div>
  );
};
// export default Button;

export default memo(Button);

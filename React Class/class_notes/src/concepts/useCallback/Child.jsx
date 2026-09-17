import React, { memo } from "react";

const Child = (props) => {
  //   console.log(props);
  /*
  {info: 0, children: 'Age'}
  {info: 0, children: 'Salary'}
  */

  const { info, children } = props;
  console.log(`${children} is rendering`);
  return (
    <div>
      <h1>
        {children}: {info}
      </h1>
    </div>
  );
};

export default memo(Child);

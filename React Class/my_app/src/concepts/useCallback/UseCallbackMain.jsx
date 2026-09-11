import React from "react";
import Parent from "./Parent";

const UseCallbackMain = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default UseCallbackMain;

/** OUTPUT
 //! With using HOF memo() only
 //? on mounting phase
 * Age is rendering
 * Salary is rendering
 * Increment Age is rendering
 * Increment Salary is rendering
 * 
 //? on updating phase - it'll render the button with function() as props regardless whether you clicked or not
 * Age is rendering
 * Increment Age is rendering
 * Increment Salary is rendering
 */

//! ==========================================
/** OUTPUT
 //! With using HOF memo() and useCallback() also
 //? on mounting phase
 * Age is rendering
 * Salary is rendering
 * Increment Age is rendering
 * Increment Salary is rendering
 * 
 //? on updating phase - it'll render the button which is clicked otherwise not render
 * Age is rendering
 * Increment Age is rendering
 */

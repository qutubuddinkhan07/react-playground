import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Username from "./Username";

const ErrorBoundaryMain = () => {
  return (
    <>
      <ErrorBoundary>
        <Username name="Naruto" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Username name="Hinata" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Username name="Himawari" />
      </ErrorBoundary>
    </>
  );
};

export default ErrorBoundaryMain;

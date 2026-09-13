import React, { useEffect, useRef, useState } from "react";

const LoginComp = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const usernameRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    usernameRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const handleOverlayMouseDown = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Enter both a username and password.");
      return;
    }

    setError("");
    onLogin?.({ username, password });
  };

  return (
    <div
      ref={overlayRef}
      onMouseDown={handleOverlayMouseDown}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900/60 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-heading"
        className="relative w-full max-w-[360px] rounded-xl bg-white p-8 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close login dialog"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md text-xl leading-none text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
        >
          ×
        </button>

        <h1
          id="login-heading"
          className="mb-6 text-xl font-semibold text-gray-800"
        >
          Log in
        </h1>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              ref={usernameRef}
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-[15px] text-gray-800 focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-600/15"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-[15px] text-gray-800 focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-600/15"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-[15px] font-semibold text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;

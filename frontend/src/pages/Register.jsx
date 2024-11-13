import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const RegisterPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Register</h1>
      <p className="mb-8 text-gray-700">Create an account to save recipes and more.</p>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
        onClick={() =>
          loginWithRedirect({
            screen_hint: "signup",
          })
        }
      >
        Sign Up
      </button>
    </div>
  );
};

export default RegisterPage;

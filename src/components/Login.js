import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleChnageForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative bg-black ">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="bg-opacity-50 bg-black"
        />
      </div>
      <form className=" absolute w-[28%] pt-12 px-12 pb-20 bg-black  mx-auto left-0 right-0 mt-[120px] text-white bg-opacity-85  rounded-md z-50">
        <h1 className="font-bold text-3xl py-4 mb-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your name"
            className="my-2 p-2 w-full h-12 rounded-md bg-transparent bg-black border border-gray-400 font-semibold"
          />
        )}
        <input
          type="text"
          placeholder="Email address.."
          className="my-2 p-2 w-full h-12 rounded-md bg-transparent bg-black border border-gray-400 font-semibold"
        />
        <input
          type="text"
          placeholder="Password"
          className="my-2 p-2 w-full h-12 rounded-md bg-transparent bg-black border border-gray-400 font-semibold"
        />
        <button className="my-4 p-2 w-full bg-red-600 rounded-md font-bold">
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <h1
          className=" text-base py-4 mb-4 cursor-pointer"
          onClick={() => handleChnageForm()}
        >
          {isSignInForm
            ? "New to netflix? Sign up now."
            : "Already registered? Sign in."}
        </h1>
      </form>
    </div>
  );
};

export default Login;
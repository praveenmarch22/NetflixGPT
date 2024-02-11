import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateCredentials } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChnageForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormValidate = () => {
    const message = validateCredentials(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;

          setErrorMessage(errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;

          setErrorMessage(errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} className="bg-opacity-50 bg-black" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-[28%] pt-12 px-12 pb-20 bg-black  mx-auto left-0 right-0 mt-[120px] text-white bg-opacity-85  rounded-md z-50"
      >
        <h1 className="font-bold text-3xl py-4 mb-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your name"
            className="my-2 p-2 w-full h-12 rounded-md bg-transparent bg-black border border-gray-400 font-semibold"
            required
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address.."
          className="my-2 p-2 w-full h-12 rounded-md bg-transparent bg-black border border-gray-400 font-semibold"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-2 w-full h-12 rounded-md bg-transparent bg-black border border-gray-400 font-semibold"
        />
        <p className="text-red-800 font-bold py-2">{errorMessage}</p>
        <button
          className="my-4 p-2 w-full bg-red-600 rounded-md font-bold"
          onClick={() => handleFormValidate()}
        >
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

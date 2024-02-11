import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { changeGptSearchViewToggle } from "../utils/gptSearchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const gptSearchViewToggle = useSelector(
    (store) => store.gpt.gptSearchViewToggle
  );
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  const handlegptSearchViewToggle = () => {
    dispatch(changeGptSearchViewToggle());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full h-[70px] bg-gradient-to-b from-black absolute z-30 bg-opacity-5 flex justify-between ">
      <div>
        <img src={LOGO_URL} className=" ml-4 w-48 absolute   z-50" />
      </div>
      {user && (
        <div className="flex">
          {gptSearchViewToggle && (
            <select
              className="px-4 mx-3 my-4 bg-transparent border border-none text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-black"
                >
                  {lang.languageName}
                </option>
              ))}
            </select>
          )}

          <button
            className="px-6 h-[43px] bg-purple-700 hover:bg-red-900 hover:text-white mt-4 rounded-lg font-bold text-lg"
            onClick={handlegptSearchViewToggle}
          >
            {!gptSearchViewToggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            ) : (
              "Home"
            )}
          </button>
          <p className="mt-4 mr-2 w-60px h-35px px-3 py-2 text-lg font-bold text-white">
            {user.displayName}
          </p>
          <div>
            <button
              className=" px-2 py-2 bg-red-700 hover:bg-red-900 hover:text-white mr-6 mt-4 rounded-lg font-bold text-lg"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

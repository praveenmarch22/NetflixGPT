import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
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

  return (
    <div className="w-full h-[70px] bg-gradient-to-b from-black absolute z-40 bg-opacity-5 flex justify-between ">
      <div>
        <img src={LOGO_URL} className=" ml-4 w-48 absolute   z-50" />
      </div>
      {user && (
        <div className="flex">
          <p className="mt-4 mr-2 w-60px h-35px px-3 py-2 text-lg font-bold text-white">
            {user.displayName}
          </p>
          <div>
            <button
              className="w-60px h-30px px-2 py-2 bg-red-700 hover:bg-red-900 hover:text-white mr-16 mt-4 rounded-lg font-bold text-lg"
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

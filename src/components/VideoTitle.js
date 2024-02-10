import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 pl-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="font-medium text-base w-1/3 mt-2">{overview}</p>
      <div className="mt-5 flex">
        <button className=" hover:bg-opacity-50 w-32 py-2 px-3 font-semibold text-lg bg-white text-black mr-2 rounded-lg bg-opacity-90 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-1 pt-1"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="w-34 py-2 px-3 font-semibold text-lg bg-gray-300 text-white rounded-lg flex justify-center bg-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 pt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

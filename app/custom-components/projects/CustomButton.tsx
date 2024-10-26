"use client";

import { useState, useRef } from "react";

function UploadButton() {
  const fileInputRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [originalLanguage, setOriginalLanguage] = useState("English");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedFile(null);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="w-full px-10 py-2 mt-6 text-white transition-colors duration-300 bg-purple-600 rounded-md hover:bg-purple-700"
      >
        Upload a video
      </button>
      <input
        type="file"
        ref={fileInputRef}
        accept="video/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative  h-[90vh] w-full max-w-lg rounded-lg bg-[#1c1d21] px-10 p-6 text-white shadow-lg">
            {" "}
            {/* Increased width and height */}
            <div className="pb-4 ">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold">
                  Recording {selectedFile?.name}
                </h2>
                <p className="text-sm text-gray-400">
                  0:32 - 1366x654 - {(selectedFile?.size / 1000).toFixed(2)}KB
                </p>
              </div>
              <button
                onClick={closePopup}
                className="absolute right-0 m-2 text-2xl text-gray-400 top-1 hover:text-gray-200"
              >
                &times;
              </button>
            </div>
            <div className="flex mt-4 ">
              {/* عرض الفيديو */}
              {selectedFile && (
                <video
                  src={URL.createObjectURL(selectedFile)}
                  controls
                  className="w-1/2 mb-28 rounded-xl " // Reduced width for the video
                />
              )}
              <div className="w-3/4 ml-4">
                {" "}
                {/* Increased width for the text section */}
               <div className="mt-4">
  <label className="block text-sm font-medium text-gray-400">
    Original Language
  </label>
  <select
    className="mt-1 w-full rounded-md bg-[#292a30] p-2 px-3 text-white focus:outline-none focus:border-transparent"
    value={originalLanguage}
    onChange={(e) => setOriginalLanguage(e.target.value)}
  >
    <option>English</option>
    <option>Arabic</option>
  </select>
</div>

<div className="mt-4">
  <label className="block text-sm font-medium text-gray-400">
    Translated Language
  </label>
  <select className="mt-1 w-full rounded-md bg-[#292a30] p-2 px-3 text-white focus:outline-none focus:border-transparent">
    <option>No Translation</option>
    <option>Spanish</option>
    <option>French</option>
  </select>
</div>

                <button
                  onClick={closePopup}
                  className="w-full px-4 py-2 mt-6 text-white bg-purple-600 rounded-md hover:bg-purple-700"
                >
                  {originalLanguage === "English"
                    ? "Proceed with English"
                    : "Proceed with Arabic"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadButton;

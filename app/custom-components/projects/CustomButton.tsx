"use client";

import { useState, useRef, ChangeEvent } from "react";
import VideoPopup from "./VideoPopup";

function UploadButton() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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
        <VideoPopup selectedFile={selectedFile} onClose={closePopup} />
      )}
    </div>
  );
}

export default UploadButton;

import { useState } from "react";

interface VideoPopupProps {
  selectedFile: File | null;
  onClose: () => void;
}

function VideoPopup({ selectedFile, onClose }: VideoPopupProps) {
  const [originalLanguage, setOriginalLanguage] = useState("English");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-50">
      <div className="relative h-[90vh] w-full max-w-lg rounded-lg bg-[#1c1d21] p-6 px-10 text-white shadow-lg">
        <div className="pb-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold">
              Recording {selectedFile?.name}
            </h2>
            <p className="text-sm text-gray-400">
              0:32 - 1366x654 - {(selectedFile?.size / 1000).toFixed(2)}KB
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute right-0 m-2 text-2xl text-gray-400 top-1 hover:text-gray-200"
          >
            &times;
          </button>
        </div>
        <div className="flex mt-4">
          {selectedFile && (
            <video
              src={URL.createObjectURL(selectedFile)}
              className="w-1/2 mb-28 rounded-xl"
              controls
              poster={URL.createObjectURL(selectedFile)}
              preload="metadata"
            />
          )}
          <div className="w-3/4 ml-4">
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-400">
                Original Language
              </label>
              <select
                className="mt-1 w-full rounded-md bg-[#292a30] p-2 px-3 text-white focus:border-transparent focus:outline-none"
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
              <select className="mt-1 w-full rounded-md bg-[#292a30] p-2 px-3 text-white focus:border-transparent focus:outline-none">
                <option>No Translation</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <button
              onClick={onClose}
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
  );
}

export default VideoPopup;

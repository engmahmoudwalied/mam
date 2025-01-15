import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoPopupProps {
  selectedFile: File | null;
  onClose: () => void;
}

function VideoPopup({ selectedFile, onClose }: VideoPopupProps) {
  const [originalLanguage, setOriginalLanguage] = useState("English");
  const [translatedLanguage, setTranslatedLanguage] =
    useState("No Translation");
  const [isOriginalOpen, setIsOriginalOpen] = useState(false);
  const [isTranslatedOpen, setIsTranslatedOpen] = useState(false);

  const originalOptions = ["English", "Arabic"];
  const translatedOptions = [ "Spanish", "French"];

  const handleOriginalOptionClick = (option: string) => {
    setOriginalLanguage(option);
    setIsOriginalOpen(false);
  };

  const handleTranslatedOptionClick = (option: string) => {
    setTranslatedLanguage(option);
    setIsTranslatedOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-50">
      {/* خطوط متحركة في الخلفية */}
         <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-purple-500 "
              initial={{ opacity: 0, y: "100vh" }}
              animate={{ opacity: 0.19, y: "-100vh" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 h-[90vh] w-full max-w-lg rounded-lg bg-[#1c1d21] p-6 px-10 text-white shadow-lg">
     
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
            {/* Original Language Selector */}
            <div className="mt-4">
  <label className="block text-sm font-medium text-gray-400">
    Original Language
  </label>
 <div
  className="mt-1 w-full cursor-pointer rounded-md bg-[#292a30] p-2 px-3 text-white flex items-center justify-between"
  onClick={() => setIsOriginalOpen(!isOriginalOpen)}
>
  {originalLanguage}
  {/* السهم باستخدام SVG */}
  <svg
    className={`w-4 h-4 ml-2 text-white transform transition-transform duration-300 ${isOriginalOpen ? "rotate-180" : "rotate-0"}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</div>


  <AnimatePresence>
    {isOriginalOpen && (
      <motion.div
        className="absolute z-10 mt-1 w-[39%] rounded-md bg-[#292a30] shadow-lg"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {originalOptions.map((option) => (
          <motion.div
            key={option}
            className={`m-2 cursor-pointer rounded-md p-1 text-white hover:bg-[#4a4b54] ${
              originalLanguage === option ? "bg-[#4a4b54]" : ""
            }`}
            onClick={() => handleOriginalOptionClick(option)}
            whileTap={{ scale: 0.95 }}
          >
            {option}
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>


            {/* Translated Language Selector */}
            <div className="mt-4">
  <label className="block text-sm font-medium text-gray-400">
    Translated Language
  </label>
  <div
  className="mt-1 w-full cursor-pointer rounded-md bg-[#292a30] p-2 px-3 text-white flex items-center justify-between"
  onClick={() => setIsTranslatedOpen(!isTranslatedOpen)}
>
  {translatedLanguage}
  {/* السهم باستخدام SVG */}
  <svg
    className={`w-4 h-4 ml-2 text-white transform transition-transform duration-300 ${isTranslatedOpen ? "rotate-180" : "rotate-0"}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</div>

  <AnimatePresence>
    {isTranslatedOpen && (
      <motion.div
        className="absolute z-10 mt-1 w-[39%] rounded-md bg-[#292a30] shadow-lg"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {translatedOptions.map((option) => (
          <motion.div
            key={option}
            className={`m-2 cursor-pointer rounded-md p-1 text-white hover:bg-[#4a4b54] ${
              translatedLanguage === option ? "bg-[#4a4b54]" : ""
            }`}
            onClick={() => handleTranslatedOptionClick(option)}
            whileTap={{ scale: 0.95 }}
          >
            {option}
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
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

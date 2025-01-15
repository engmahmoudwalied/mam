import { useState } from "react";

const Smart = () => {
  const [response, setResponse] = useState("");

  const handleAIRequest = () => {
    // محاكاة لطلب من الذكاء الاصطناعي
    setResponse("This is a smart response from AI!");
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        Ai things
      </div>
      <div className="flex-1 px-4 py-2">
        <button
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={handleAIRequest}
        >
          Get AI Response
        </button>
        {response && (
          <div className="p-2 mt-4 text-sm bg-gray-100 rounded-md">
            {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default Smart;

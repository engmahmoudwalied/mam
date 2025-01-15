const Presets = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        Presets
      </div>
      <div className="flex-1 px-4 py-2">
        <button className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Apply Preset 1
        </button>
        <button className="w-full py-2 mt-2 text-white bg-green-500 rounded-md hover:bg-green-600">
          Apply Preset 2
        </button>
      </div>
    </div>
  );
};

export default Presets;

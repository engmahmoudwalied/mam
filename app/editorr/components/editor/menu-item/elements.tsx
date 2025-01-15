export const Elements = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center h-12 px-4 font-medium text-md text-text-primary">
        Shapes
      </div>
      <div className="flex gap-4 mt-4">
        <div className="w-12 h-12 bg-blue-500 rounded-md"></div> {/* مربع */}
        <div className="w-12 h-12 bg-red-500 rounded-full"></div> {/* دائرة */}
        <div className="w-12 h-12 rotate-45 bg-green-500"></div> {/* مثلث */}
      </div>
    </div>
  );
};

const BasicImage = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        BasicImage
      </div>
      <div className="flex flex-col items-center mt-4">
        <img
          src="/path/to/image.jpg"
          alt="Basic Image"
          className="rounded-lg shadow-lg"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default BasicImage;

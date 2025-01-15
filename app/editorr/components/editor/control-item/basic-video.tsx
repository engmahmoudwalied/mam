const BasicVideo = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        BasicVideo
      </div>
      <div className="flex items-center justify-center flex-1">
        <video className="w-full max-w-xl" controls>
          <source src="path_to_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default BasicVideo;

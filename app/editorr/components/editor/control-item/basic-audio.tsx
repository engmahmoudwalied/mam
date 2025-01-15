import { useState } from "react";

const BasicAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        BasicAudio
      </div>
      <div className="flex flex-col items-center">
        <audio ref={audioRef} src="/path/to/audio-file.mp3" />
        <button
          onClick={toggleAudio}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default BasicAudio;

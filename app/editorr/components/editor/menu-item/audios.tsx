import { Button } from "../../ui/button";
import { ScrollArea } from "../../ui/scroll-area";
import { AUDIOS } from "../../../data/audio";
import { ADD_AUDIO, dispatcher } from "@designcombo/core";
import { Music } from "lucide-react";
import { nanoid } from "nanoid";

export const Audios = () => {
  const handleAddAudio = (src: string) => {
    if (!src) {
      console.error("Audio source is invalid or missing");
      return;
    }
    dispatcher?.dispatch(ADD_AUDIO, {
      payload: {
        id: nanoid(),
        details: {
          src,
        },
      },
      options: {},
    });
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        Audios
      </div>
      <ScrollArea>
        <div className="flex flex-col px-2">
          {AUDIOS.map((audio, index) => (
            <AudioItem
              handleAddAudio={handleAddAudio}
              audio={audio}
              key={index}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

const AudioItem = ({
  audio,
  handleAddAudio,
}: {
  audio: { name: string; author: string; src: string };
  handleAddAudio: (src: string) => void;
}) => {
  return (
    <div
      onClick={() => handleAddAudio(audio.src)}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
      }}
      className="flex gap-4 px-2 py-1 text-sm cursor-pointer hover:bg-zinc-800/70"
    >
      <div className="flex items-center justify-center h-12 bg-zinc-800">
        <Music width={16} />
      </div>
      <div className="flex flex-col justify-center">
        <div>{audio.name}</div>
        <div className="text-zinc-400">{audio.author}</div>
      </div>
    </div>
  );
};

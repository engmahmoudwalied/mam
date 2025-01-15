import { Button } from "../../ui/button";
import {
  ADD_AUDIO,
  ADD_IMAGE,
  ADD_TEXT,
  ADD_VIDEO,
  dispatcher,
} from "@designcombo/core";
import { nanoid } from "nanoid";
import { IMAGES } from "../../../data/images";
import { DEFAULT_FONT } from "../../../data/fonts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { UploadIcon } from "lucide-react";

export const Uploads = () => {
  const handleAddImage = () => {
    if (!IMAGES[4] || !IMAGES[4].src) {
      console.error("Image data is invalid or missing");
      return;
    }
    dispatcher?.dispatch(ADD_IMAGE, {
      payload: {
        id: nanoid(),
        details: {
          src: IMAGES[4].src,
        },
      },
      options: {
        trackId: "main",
      },
    });
  };

  const handleAddText = () => {
    if (!DEFAULT_FONT?.url || !DEFAULT_FONT?.postScriptName) {
      console.error("Font data is invalid or missing");
      return;
    }
    dispatcher?.dispatch(ADD_TEXT, {
      payload: {
        id: nanoid(),
        details: {
          text: "Heading",
          fontSize: 200,
          width: 900,
          fontUrl: DEFAULT_FONT.url,
          fontFamily: DEFAULT_FONT.postScriptName,
          color: "#ffffff",
          WebkitTextStrokeColor: "green",
          WebkitTextStrokeWidth: "20px",
          textShadow: "30px 30px 100px rgba(255, 255, 0, 1)",
          wordWrap: "break-word",
          wordBreak: "break-all",
        },
      },
      options: {},
    });
  };

  const handleAddAudio = () => {
    const audioSrc = "https://ik.imagekit.io/snapmotion/timer-voice.mp3";
    if (!audioSrc) {
      console.error("Audio source is missing");
      return;
    }
    dispatcher?.dispatch(ADD_AUDIO, {
      payload: {
        id: nanoid(),
        details: {
          src: audioSrc,
        },
      },
      options: {},
    });
  };

  const handleAddVideo = () => {
    const videoSrc =
      "https://ik.imagekit.io/snapmotion/75475-556034323_medium.mp4";
    if (!videoSrc) {
      console.error("Video source is missing");
      return;
    }
    dispatcher?.dispatch(ADD_VIDEO, {
      payload: {
        id: nanoid(),
        details: {
          src: videoSrc,
        },
        metadata: {
          resourceId: "7415538a-5d61-4a81-ad79-c00689b6cc10",
        },
      },
      options: {
        trackId: "main",
      },
    });
  };

  const handleAddVideo2 = () => {
    const videoSrc = "https://ik.imagekit.io/snapmotion/flat.mp4";
    if (!videoSrc) {
      console.error("Video source is missing");
      return;
    }
    dispatcher?.dispatch(ADD_VIDEO, {
      payload: {
        id: nanoid(),
        details: {
          src: videoSrc,
        },
        metadata: {
          resourceId: "7415538a-5do1-4m81-a279-c00689b6cc10",
        },
      },
    });
  };

  return (
    <div className="flex-1 ">
      <div className="text-md text-text-primary flex h-8 items-center p-4 font-medium">
        Your media
      </div>
      <div className="px-4 ">
        <div>
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="projects">Project</TabsTrigger>
              <TabsTrigger value="workspace">Workspace</TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
              <Button
                onClick={handleAddAudio}
                className="flex w-full gap-2"
                size="sm"
                variant="secondary"
              >
                <UploadIcon size={16} /> Upload Audio
              </Button>
              <Button
                onClick={handleAddImage}
                className="mt-2 flex w-full gap-2"
                size="sm"
                variant="secondary"
              >
                <UploadIcon size={16} /> Upload Image
              </Button>
              <Button
                onClick={handleAddText}
                className="mt-2 flex w-full gap-2"
                size="sm"
                variant="secondary"
              >
                <UploadIcon size={16} /> Add Text
              </Button>
              <Button
                onClick={handleAddVideo}
                className="mt-2 flex w-full gap-2 "
                size="sm"
                variant="secondary"
              >
                <UploadIcon size={16} /> Upload Video
              </Button>
            </TabsContent>
            <TabsContent value="workspace">
              <Button
                className="flex w-full gap-2"
                size="sm"
                variant="secondary"
              >
                <UploadIcon size={16} /> Upload
              </Button>
              <div>Some assets here</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

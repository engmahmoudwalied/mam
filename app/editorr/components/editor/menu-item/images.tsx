import { Button } from "../../ui/button";
import { ScrollArea } from "../../ui/scroll-area";
import { IMAGES } from "../../../data/images";
import { ADD_IMAGE, dispatcher } from "@designcombo/core";
import { nanoid } from "nanoid";

export const Images = () => {
  const handleAddImage = (src: string) => {
    if (!src) {
      console.error("Image source is invalid or missing");
      return;
    }

    dispatcher?.dispatch(ADD_IMAGE, {
      payload: {
        id: nanoid(),
        details: {
          src: src,
        },
      },
      options: {
        trackId: "main",
      },
    });
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        Photos
      </div>
      <ScrollArea>
        <div className="px-4 masonry-sm">
          {IMAGES.map((image, index) =>
            image?.src ? (
              <div
                onClick={() => handleAddImage(image.src)}
                key={index}
                className="flex items-center justify-center w-full pb-2 overflow-hidden cursor-pointer bg-zinc-950"
              >
                <img
                  src={image.src}
                  className="object-cover w-full h-full rounded-md"
                  alt="image"
                />
              </div>
            ) : null,
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

function modifyImageUrl(url: string): string {
  try {
    const uploadIndex = url.indexOf("/upload");
    if (uploadIndex === -1) {
      throw new Error("Invalid URL: /upload not found");
    }

    const modifiedUrl =
      url.slice(0, uploadIndex + 7) +
      "/w_0.05,c_scale" +
      url.slice(uploadIndex + 7);
    return modifiedUrl;
  } catch (error) {
    console.error("Error modifying URL:", error);
    return url; // قم بإرجاع الرابط الأصلي في حال حدوث خطأ
  }
}

import { ScrollArea } from "../../ui/scroll-area";
import { VIDEOS } from "../../../data/video";
import { ADD_VIDEO, dispatcher } from "@designcombo/core";
import { nanoid } from "nanoid";

export const Videos = () => {
  // دالة لإضافة الفيديو عند النقر على الصورة المصغرة
  const handleAddVideo = (src: string) => {
    if (!src) {
      console.error("Invalid video source");
      return;
    }

    if (!dispatcher || typeof dispatcher.dispatch !== "function") {
      console.error("Dispatcher is undefined or not a function");
      return;
    }

    dispatcher.dispatch(ADD_VIDEO, {
      payload: {
        id: nanoid(), // إنشاء معرف فريد للفيديو
        details: {
          src: src, // الرابط الخاص بالفيديو
        },
        metadata: {
          resourceId: src, // يمكن استخدام معرّف الفيديو كـ resourceId
        },
      },
      options: {
        trackId: "main", // تخصيص معرف المسار (track)
      },
    });
  };

  return (
    <div className="flex flex-col flex-1">
      {/* العنوان الخاص بالقسم */}
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        Videos
      </div>

      {/* مكون التمرير الذي يحتوي على الفيديوهات */}
      <ScrollArea>
        <div className="px-4 masonry-sm">
          {VIDEOS.map((video, index) => (
            <div
              onClick={() => handleAddVideo(video.src)} // عند النقر على الصورة المصغرة
              key={index}
              className="flex items-center justify-center w-full pb-2 overflow-hidden cursor-pointer bg-zinc-950"
            >
              {/* عرض الصورة المصغرة للفيديو */}
              <img
                src={video.preview} // رابط الصورة المصغرة
                className="object-cover w-full h-full rounded-md"
                alt={`Video thumbnail ${index}`} // بديل الصورة مع رقم الفهرس
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
  
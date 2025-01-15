import {
  ANIMATIONS,
  EDIT_OBJECT,
  IAnimate,
  dispatcher,
  useEditorState,
} from "@designcombo/core";
import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

const Animations = () => {
  const handleOnClick = (animation: IAnimate) => {
    dispatcher.dispatch(EDIT_OBJECT, {
      payload: {
        animation: {
          [animation.type]: {
            name: animation.name,
          },
        },
      },
    });
  };

  const { trackItemsMap, activeIds } = useEditorState();
  const targetType = trackItemsMap[activeIds[0]]?.type;

  // استخدام useMemo لتحسين الأداء عن طريق تقليل الحسابات غير الضرورية
  const filteredAnimations = useMemo(() => {
    return targetType === "text"
      ? ANIMATIONS
      : ANIMATIONS.filter((animation) => animation.category === "element");
  }, [targetType]);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-none h-12 px-4 font-medium text-md text-text-primary">
        Animations
      </div>
      <div className="px-4">
        <Tabs defaultValue="in" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="in">In</TabsTrigger>
            <TabsTrigger value="out">Out</TabsTrigger>
          </TabsList>
          <TabsContent value="in">
            {filteredAnimations
              .filter((i) => i.type === "in")
              .map((animation) => (
                <div
                  onClick={() => handleOnClick(animation)}
                  key={animation.name} // استخدمنا animation.name كـ key
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-8 h-8 bg-zinc-600"></div>
                  <div> {animation.name || animation.type}</div>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="out">
            {filteredAnimations
              .filter((i) => i.type === "out")
              .map((animation) => (
                <div
                  onClick={() => handleOnClick(animation)}
                  key={animation.name} // استخدمنا animation.name كـ key
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-8 h-8 bg-zinc-600"></div>
                  <div> {animation.name || animation.type}</div>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Animations;

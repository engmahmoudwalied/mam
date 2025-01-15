import { Button } from "../../ui/button";
import { DEFAULT_FONT } from "../../../data/fonts";
import { ADD_TEXT, dispatcher } from "@designcombo/core";
import { nanoid } from "nanoid";
import { useState } from "react";

export const Texts = () => {
  const [text, setText] = useState("Heading");
  const [fontSize, setFontSize] = useState(120);
  const [color, setColor] = useState("#000");
  const [editingTextId, setEditingTextId] = useState<string | null>(null); // لتتبع النص الجاري تحريره

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(e.target.value));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleAddOrUpdateText = () => {
    if (!dispatcher) {
      console.warn("Dispatcher is undefined or null");
      return;
    }

    const details = {
      text,
      fontSize,
      width: 600,
      fontUrl: DEFAULT_FONT?.url || "",
      fontFamily: DEFAULT_FONT?.postScriptName || "",
      color,
      wordWrap: "break-word",
      wordBreak: "break-all",
      textAlign: "center",
    };

    if (editingTextId) {
      // إذا كنا في وضع التحرير، نقوم بتحديث النص الحالي
      try {
        dispatcher.dispatch("UPDATE_TEXT", {
          payload: {
            id: editingTextId,
            details,
          },
          options: {},
        });
        setEditingTextId(null); // إلغاء وضع التحرير بعد التحديث
      } catch (error) {
        console.error("Error updating text:", error);
      }
    } else {
      // إضافة نص جديد إذا لم يكن في وضع التحرير
      try {
        dispatcher.dispatch(ADD_TEXT, {
          payload: {
            id: nanoid(),
            details,
          },
          options: {},
        });
      } catch (error) {
        console.error("Error dispatching text addition:", error);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddOrUpdateText();
    }
  };

  return (
    <div className="flex-1">
      <div className="flex items-center h-12 px-4 font-medium text-md text-text-primary">
        Text
      </div>
      <div className="flex flex-col flex-1 px-4">
        {/* Input for Text */}
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter text"
          style={{ color: "#000" }} // Set input text color to black
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
        />

        {/* Input for Font Size */}
        <input
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
          min="1"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          style={{ color: "#000" }} // Set input text color to black
          placeholder="Font Size"
        />

        {/* Color Picker */}
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
        />

        {/* Add or Update Text Button */}
        <Button
          onClick={handleAddOrUpdateText}
          size="sm"
          variant="secondary"
          className="w-full"
        >
          {editingTextId ? "Update text" : "Add text"}
        </Button>
      </div>
    </div>
  );
};

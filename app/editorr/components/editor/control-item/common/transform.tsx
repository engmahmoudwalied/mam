import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Slider } from "../../../ui/slider";
import { RotateCw } from "lucide-react";
import { useState } from "react";

const Transform = () => {
  const [scaleValue, setScaleValue] = useState([1]); // Scale value between 0 and 1
  const [positionX, setPositionX] = useState(100); // Position X value
  const [positionY, setPositionY] = useState(100); // Position Y value
  const [rotateValue, setRotateValue] = useState(0); // Rotate value in degrees

  return (
    <div className="flex flex-col gap-2">
      <div>Transform</div>

      {/* Scale */}
      <div className="flex flex-col gap-2">
        <div className="text-sm text-zinc-400">Scale</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 40px 24px",
            gap: "4px",
          }}
        >
          <Slider
            id="scale"
            max={2} // قيمة الحد الأقصى 2
            step={0.1}
            onValueChange={(value) => setScaleValue(value)} // ربط القيمة
            value={scaleValue} // قيمة الـ Slider مرتبطة بالحالة
            aria-label="Scale"
          />
          <Input
            className="px-2 text-sm text-center w-11"
            value={scaleValue[0] * 100} // تحويل القيمة من 0 إلى 1 إلى 0 إلى 100
            onChange={(e) => setScaleValue([parseFloat(e.target.value) / 100])} // تحديث القيمة في الـ Slider
          />
          <div className="flex items-center">
            <Button
              size="icon"
              variant="ghost"
              className="w-6 h-6 text-zinc-400"
              onClick={() => setScaleValue([1])} // إعادة تعيين القيمة إلى 1
            >
              <RotateCw size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* Position */}
      <div className="flex flex-col gap-2">
        <div className="text-sm text-zinc-400">Position</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 24px",
            gap: "4px",
          }}
        >
          <div className="relative">
            <Input
              className="px-2 text-sm"
              value={positionX}
              onChange={(e) => setPositionX(parseInt(e.target.value))}
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-zinc-200">
              x
            </div>
          </div>
          <div className="relative">
            <Input
              className="px-2 text-sm"
              value={positionY}
              onChange={(e) => setPositionY(parseInt(e.target.value))}
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-zinc-200">
              y
            </div>
          </div>

          <div className="flex items-center">
            <Button
              size="icon"
              variant="ghost"
              className="w-6 h-6 text-zinc-400"
              onClick={() => {
                setPositionX(100); // إعادة تعيين X
                setPositionY(100); // إعادة تعيين Y
              }}
            >
              <RotateCw size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* Rotate */}
      <div className="flex flex-col gap-2">
        <div className="text-sm text-zinc-400">Rotate</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 24px",
            gap: "4px",
          }}
        >
          <Input
            className="px-2 text-sm"
            value={rotateValue}
            onChange={(e) => setRotateValue(parseInt(e.target.value))}
          />
          <div></div>
          <div className="flex items-center">
            <Button
              size="icon"
              variant="ghost"
              className="w-6 h-6 text-zinc-400"
              onClick={() => setRotateValue(0)} // إعادة تعيين التدوير إلى 0
            >
              <RotateCw size={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;

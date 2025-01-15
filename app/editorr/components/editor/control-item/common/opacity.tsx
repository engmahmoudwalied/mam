import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { Slider } from "../../../ui/slider";
import { RotateCw } from "lucide-react";
import { useState } from "react";

const Opacity = () => {
  const [value, setValue] = useState([0.1]); // القيمة الأولية 0.1 (أي 10%)

  return (
    <div>
      <div className="grid gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="opacity">Opacity</Label>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 40px 24px",
            gap: "4px",
          }}
        >
          <Slider
            id="opacity"
            max={1}
            step={0.1}
            onValueChange={setValue}
            value={value} // ربط القيمة بالـ state
            aria-label="Opacity Slider"
          />
          <Input
            className="w-11 px-2 text-center text-sm"
            value={value[0] * 100} // تحويل القيمة إلى 100
            onChange={(e) => setValue([parseInt(e.target.value) / 100])} // تحديث القيمة عند تعديل الـ Input
            aria-label="Opacity Input"
          />
          <div className="flex items-center">
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 text-zinc-400"
              onClick={() => setValue([0.1])} // إعادة تعيين القيمة إلى 10%
            >
              <RotateCw size={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opacity;

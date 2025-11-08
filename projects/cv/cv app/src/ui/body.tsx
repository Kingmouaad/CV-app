import { useState } from "react";
import Edu from "./edu";
import Genral from "./genral";
import Practical from "./practical";
import Change from "./change";
export default function Body() {
  const [content, setContent] = useState({
    general: {
      name: "",
      email: "",
      phone: "",
      text: "",
    },
    education: [{ school: "", degree: "", syear: "", eyear: "" }],
    practical: [{ company: "", position: "", duration: "" }],
  });
  function sync(k, hold: string): void {
    setContent((contentt) => ({
      ...contentt,
      general: { ...contentt.general, [hold]: k },
    }));
  }
  function sync1(k, hold: string): void {
    setContent((contentt) => ({
      ...contentt,
      education: { ...contentt.education, [hold]: k },
    }));
  }
  function sync2(k, hold: string): void {
    setContent((contentt) => ({
      ...contentt,
      practical: { ...contentt.practical, [hold]: k },
    }));
  }
  return (
    <div className="bg-[#f6f7f8] flex-1 flex justify-start gap-5 p-3 min-h-[70vh]">
      <div className="w-[30%] flex flex-col gap-2.5 bg-amber-500  p-3 components">
        <Genral Change={sync} />
        <Edu Change={sync1} />
        <Practical Change={sync2} />
      </div>
      <div className="w-[50%] bg-[#151577] flex flex-col m-5 gap-3">
        <Change general={content} />
      </div>
    </div>
  );
}

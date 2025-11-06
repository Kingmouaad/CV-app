import Edu from "./edu";
import Genral from "./genral";
import Practical from "./practical";

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] flex-1 flex justify-start gap-5 p-3 min-h-[70vh]">
      <div className="w-[30%] flex flex-col gap-2.5 bg-amber-500  p-3 components">
        <Genral />
        <Edu />
        <Practical />
      </div>
      <div className="w-[50%] bg-[#151577] "></div>
    </div>
  );
}

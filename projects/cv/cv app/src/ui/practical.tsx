import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { useState } from "react";

type ToolItem = { id: number };

export default function Practical({ Change }) {
  const [click, setClick] = useState(false);
  const [tools, setTools] = useState<ToolItem[]>([{ id: Date.now() }]);

  const addTool = () => setTools((prev) => [...prev, { id: Date.now() }]);
  const removeTool = (id: number) =>
    setTools((prev) => prev.filter((e) => e.id !== id));

  return (
    <div className="bg-[#f9fbfc]">
      <div className="flex justify-between p-4 [border-bottom:1px_solid_black]">
        <div>Practical Experience</div>
        <button
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? (
            <ChevronUp size={30} color="#27d3c8" />
          ) : (
            <ChevronDown size={30} color="#27d3c8" />
          )}
        </button>
      </div>
      {click && (
        <div>
          {tools.map((t) => (
            <Tool key={t.id} id={t.id} onRemove={() => removeTool(t.id)} />
          ))}
          <button
            className="w-[96%] [border:2px_dotted_blue] m-2 h-10 rounded-lg font-bold text-[blue] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              addTool();
            }}
          >
            ADD EDUCATION
          </button>
        </div>
      )}
    </div>
  );
}

function Tool({ id, onRemove }: { id: number; onRemove: () => void }) {
  return (
    <form className="grid grid-cols-[1fr_1fr] auto-rows-[60px] bg-[#dbeafe] m-2 rounded-2xl [box-shadow:0_0_6px_black]">
      <div className="col-[1/3]">
        <label htmlFor={`uni-${id}`}>Company</label>
        <input type="text" id={`uni-${id}`} placeholder="Company of example" />
      </div>
      <div className="col-[1/3]">
        <label htmlFor={`role-${id}`}>Role</label>
        <input type="text" id={`role-${id}`} placeholder="Software Enginner" />
      </div>
      <div className="col-[1/3] ">
        <label htmlFor={`area-${id}`}>Responsibilities</label>
        <textarea
          id={`area-${id}`}
          placeholder="a brief summary of the work u did "
          className=""
        />
      </div>
      <div>
        <label htmlFor={`sdate-${id}`}>Start Date</label>
        <input type="text" id={`sdate-${id}`} placeholder="April 2017" />
      </div>
      <div>
        <label htmlFor={`edate-${id}`}>End Date</label>
        <input id={`edate-${id}`} type="text" placeholder="May 2020" />
      </div>
      <div className="col-[1/3] flex justify-center items-center text-[25px] text-red-600">
        <button
          className="flex cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
        >
          <Trash2 size={30} color="#fb0404" className="relative top-[3px]" />
          Remove
        </button>
      </div>
    </form>
  );
}

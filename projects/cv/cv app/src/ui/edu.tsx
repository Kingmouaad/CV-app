import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Edu() {
  const [click, setclick] = useState(false);
  const [tools, settools] = useState([<Tool key={0} />]);

  return (
    <div className="bg-[#f9fbfc]">
      <div className="flex justify-between p-4 [border-bottom:1px_solid_black]">
        <div>Educational Experience</div>
        <button
          onClick={() => {
            setclick(!click);
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
        <div className="">
          {tools}
          <button
            className="w-[96%] [border:2px_dotted_blue] m-2 h-[40px] rounded-[8px] font-bold text-[blue] cursor-pointer"
            onClick={() => {
              settools([...tools, <Tool key={tools.length} />]);
            }}
          >
            ADD EDUCATION
          </button>
        </div>
      )}
    </div>
  );
}
function Tool() {
  return (
    <form className="grid grid-cols-[1fr_1fr] auto-rows-[60px] bg-[#dbeafe] m-2 rounded-2xl [box-shadow:0_0_6px_black]">
      <div className="col-[1/3]">
        <label htmlFor="uni">Univeristy / School </label>
        <input type="text" id="fullname" placeholder="University of exemple " />
      </div>
      <div className="col-[1/3]">
        <label htmlFor="degree">degree</label>
        <input type="text" id="degree" placeholder="Computer of Sience " />
      </div>
      <div>
        <label htmlFor="sdate">Start Date </label>
        <input type="text" id="sdate" placeholder="April 2017 " />
      </div>
      <div>
        <label htmlFor="edate">End Date </label>
        <input id="edate" type="text" placeholder="May 2020 "></input>
      </div>
      <div className="col-[1/3] flex justify-center items-center text-[25px] text-red-600">
        <button className="flex  " onClick={() => {}}>
          <Trash2 size={30} color="#fb0404" className="relative top-[3px]" />
          Remove
        </button>
      </div>
    </form>
  );
}

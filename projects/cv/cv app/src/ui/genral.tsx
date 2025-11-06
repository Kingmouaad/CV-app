import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Genral() {
  const [click, setclick] = useState(false);

  return (
    <div className="bg-[#f9fbfc] ">
      <div className="flex justify-between p-4 [border-bottom:1px_solid_black]">
        <div>Genral information</div>
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
        <form className="grid grid-cols-[1fr_1fr] auto-rows-[60px]  ">
          <div className="col-[1/3]">
            <label htmlFor="fullname">Full name</label>
            <input type="text" id="fullname" value={0} placeholder="ilyes" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={0}
              placeholder="ilyes@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="phonenumber">Number</label>
            <input
              type="tel"
              id="phonenumber"
              value={0}
              placeholder="213 05 49 38 47 38 "
            />
          </div>
          <div className="col-[1/3] min-h-18">
            <label htmlFor="pro">Summary fo the background </label>
            <textarea
              id="pro"
              placeholder="a brief sumary of ur profisinal background"
              className="min-h-[50px] p-2 "
            ></textarea>
          </div>
        </form>
      )}
    </div>
  );
}

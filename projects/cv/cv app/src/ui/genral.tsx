import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Genral({ Change }) {
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
            <input
              type="text"
              id="fullname"
              defaultValue={""}
              placeholder="ilyes"
              onChange={(e) => Change(e.target.value, "name")}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              defaultValue={""}
              placeholder="ilyes@gmail.com"
              onChange={(e) => Change(e.target.value, "email")}
            />
          </div>
          <div>
            <label htmlFor="phonenumber">Number</label>
            <input
              type="tel"
              id="phonenumber"
              defaultValue={""}
              placeholder="213 05 49 38 47 38 "
              onChange={(e) => Change(e.target.value, "phone")}
            />
          </div>
          <div className="col-[1/3] min-h-18">
            <label htmlFor="pro">Summary fo the background </label>
            <textarea
              id="pro"
              placeholder="a brief sumary of ur profisinal background"
              className="min-h-[50px] p-2 "
              onChange={(e) => Change(e.target.value, "text")}
            ></textarea>
          </div>
        </form>
      )}
    </div>
  );
}
